<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use App\Option;
use App\Quiz;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{

    /*
     * Only SuperAdmin can create, edit or delete items
     * @return
     * */
    protected function isSuperAdmin()
    {
        return auth('api')->user()->role === 'SuperAdmin'; // 1 or ""
    }

    public function paginate($pagination)
    {
        return [
            'items' => $pagination->items(),
            'total' => $pagination->total(),
            'page' => $pagination->currentPage()
        ];
    }

    public function quizzes(Request $request)
    {
        $this->validate($request, [
            'type' => 'required|integer',
            'page' => 'required|integer',
            'size' => 'required|integer'
        ]);
        $items = Quiz::Paginate($request->size);
        return response(["data" => $this->paginate($items)], 200);
    }


    public function addQuizzes(Request $request)
    {
        $items = $request->all();
        foreach ($items as $item) {
            $quiz = $this -> create($item);
            $options = [];
            foreach ($item["answers"] as $em) {
                array_push($options, new Option([
                    "quiz_id" => $quiz->id,
                    "description" => $em["description"],
                    "image" => $em["image"],
                    "i18n" => $em["i18n"],
                    "is_correct" => $em["is_correct"]
                ]));
            }
            $quiz->options()->saveMany($options);

        }
        return response(["message" => "insert successfully"],200);
    }

    /**
     * Show the form for creating a new resource.
     * @return \Illuminate\Http\Response
     */
    public function create(array $data)
    {
        return Quiz::updateOrCreate([
            "question" => $data["question"],
            "i18n" => $data["i18n"],
            "image" => $data["image"],
            "audio" => $data["audio"],
            "description" => $data["description"],
            "input" => $data["input"],
            "type" => $data["type"],
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
