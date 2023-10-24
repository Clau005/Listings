<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Listing extends Model
{
    use HasFactory;

    protected $table = 'listings';

    protected $fillable = ['user_id', 'title', 'description', 'status', 'image'];


    public function user() : belongsTo
    {
        return $this->belongsTo(App\Models\User::class);
    }
}
