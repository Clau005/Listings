<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ListingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'status' => $this->status,
            'user_id' => $this->user_id,
            'image' => $this->image,
            'location' => $this->location,
            'beds' => $this->beds,
            'baths' => $this->baths,
            'property_type' => $this->property_type,
            'price' => $this->price,
            'floor' => $this->floor
        ];
    }
}
