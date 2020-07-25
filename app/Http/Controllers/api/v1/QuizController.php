<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use App\Option;
use App\Quiz;
use Illuminate\Http\Request;

class QuizController extends Controller
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
            'type' => 'required|integer',
            'page' => 'required|integer',
            'size' => 'required|integer'
        ]);
        $items = Quiz::Paginate($request->size);
        return response(["data" => $this->paginate($items)], 200);
    }

    // It just used to import data.
    protected function CreateMany(Request $request)
    {
        $items = $request->all();
        foreach ($items as $item) {
            $quiz = $this->create($item);
            $options = [];
            foreach ($item["answers"] as $em) {
                array_push($options, new Option([
                    "quiz_id" => $quiz['id'],
                    "description" => $em["description"],
                    "image" => $em["image"],
                    "i18n" => $em["i18n"],
                    "is_correct" => $em["is_correct"]
                ]));
            }
            $quiz->options()->saveMany($options);

        }
        return response(["message" => "insert successfully"], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $this->validate($request, [
            'question' => 'required|string',
            'i18n' => 'required|string',
            'image' => 'nullable|string',
            'audio' => 'nullable|string',
            'description' => 'nullable|string',
            'input' => 'required|string',
            'type' => 'required|string',
        ]);
        return $this->store($request->all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(array $data)
    {
        $result = Quiz::firstOrCreate([
            "question" => $data["question"],
            "i18n" => $data["i18n"],
            "image" => $data["image"],
            "audio" => $data["audio"],
            "description" => $data["description"],
            "input" => $data["input"],
            "type" => $data["type"],
        ]);
        if(!!$result){
            return response(["message" => "Created successful!"], 200);
        }
        return $result;
    }

    /**
     * Display the specified resource by paginate.
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'question' => 'required|string',
            'i18n' => 'required|string',
            'image' => 'nullable|string',
            'audio' => 'nullable|string',
            'description' => 'nullable|string',
            'input' => 'required|string',
            'type' => 'required|string',
        ]);
        $params = $request->all();

        Quiz::find($id)
            ->update([
                'question' => $params['question'],
                'i18n' => $params['i18n'],
                'image' => $params['image'],
                'audio' => $params['audio'],
                'description' => $params['description'],
                'input' => $params['input'],
                'type' => $params['type'],
            ]);
        return response(["message" => "successful"], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Quiz::find($id)
            ->delete();
        return response(["message" => "successful"], 200);
    }
}
