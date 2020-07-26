<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    protected $fillable = [
        'question', 'i18n', 'image', 'audio', "description", "input", "type"
    ];

    protected $attributes = [
        'i18n' => "en",
    ];

    public function options()
    {
        return $this->hasMany(Option::class)->orderBy('created_at', 'DESC');
    }
}
