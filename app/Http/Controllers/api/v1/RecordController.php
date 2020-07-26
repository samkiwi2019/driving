<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use App\Quiz;
use App\Record;
use Illuminate\Http\Request;

class RecordController extends Controller
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
        // The params of with can be a Array! i.e. ['user', 'quiz']
        $items = Record::with('quiz')->Paginate($request->size);
        return response(["data" => $this->paginate($items)], 200);
    }


    /**
     * Create a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $this->validate($request, [
            'user_id' => 'required|integer',
            'quiz_id' => 'required|integer',
            'my_answers' => 'required|string',
        ]);

        $result = Record::firstOrCreate($request->all());

        if(!!$result){
            return response(["message" => "Created successful!"], 200);
        }
        return $result;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Record::find($id)
            ->delete();
        return response(["message" => "Deleted successful"], 200);
    }
}
