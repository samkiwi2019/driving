<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
    protected $fillable = [
        'quiz_id', 'description', 'image', 'i18n', "is_correct"
    ];

    protected $attributes = [
        'i18n' => "en",
    ];

    public function quiz()
    {
        return $this->belongsTo(Quiz::class);
    }
}
