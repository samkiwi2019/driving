<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use App\Quiz;
use App\Record;
use App\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{

    /**
     * format a paginating
     * @param
     * @return array
     * */
    protected function paginate($pagination)
    {
        return [
            'items' => $pagination->items(),
            'total' => $pagination->total(),
            'page' => $pagination->currentPage()
        ];
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->validate($request, [
            'page' => 'required|integer',
            'size' => 'required|integer'
        ]);
        $items = User::Paginate($request->size);
        return response(["data" => $this->paginate($items)], 200);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'nickname' => ['required', 'string', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param array $data
     * @return \App\User
     */
    protected function store(array $data)
    {
        return User::firstOrCreate([
            'name' => $data['name'],
            'email' => $data['email'],
            'nickname' => $data['nickname'],
            'password' => Hash::make($data['password']),
        ]);
    }

    public function create(Request $request)
    {
        $this->validator($request->all())->validate();
        $result = $this->store($request->all());
        if (!!$result) {
            return response(["message" => "Created successful!"], 200);
        }
        return $result;
    }

    /**
     * Handle a registration request for the application.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $this->validator($request->all())->validate();

        event(new Registered($user = $this->store($request->all())));

        $token = auth('api')->login($user);

        return response(['access_token' => $token, 'user' => auth('api')->user()], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Get a validator for an updating user request.
     *
     * @param array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function updateValidator(array $data)
    {
        return Validator::make($data, [
            'id' => ['required', 'int', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'],
            'nickname' => ['required', 'string', 'max:255'],
        ]);
    }

    /**
     * Update a user info such as name,nickname and email.
     * For updating password , it will be allowed in resetting password process.
     * For updating role of a user, it will be allowed with the level 11 of security. This function will be added in the short future.
     * Security level >= 11, it will be check in security middleware;
     *
     * @param int $id
     * @return \Illuminate\Contracts\Routing\ResponseFactory
     */
    public function update(Request $request, $id)
    {

        $params = $request->all();
        $this->updateValidator($params)->validate();
        User::find($id)
            ->update([
                'name' => $params['name'],
                'nickname' => $params['nickname'],
                'email' => $params['email'],
            ]);
        return response(["message" => "successful"], 200);
    }


    /**
     * Remove a user.
     * Security level >= 11, it will be check in security middleware;
     * @param int $id
     * @return \Illuminate\Contracts\Routing\ResponseFactory
     */
    public function destroy($id)
    {
        User::find($id)
            ->delete();
        return response(["message" => "successful"], 200);
    }

    public function visitors()
    {
        $all = User::all();
        $times = $all->sum('login_times');
        $user_total = $all->count();
        $quiz_total= Quiz::all()->count();
        $record_total= Record::all()->count();
        return response(["visitors_count" => $times, "users_count" => $user_total, 'quizzes_count' => $quiz_total, 'records_count' => $record_total], 200);
    }
}
