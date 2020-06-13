<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    public function options()
    {
        return $this->hasMany(Option::class)->orderBy('created_at', 'DESC');
    }
}
