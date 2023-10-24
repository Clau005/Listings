<?php

namespace App\Http\Controllers;

use App\Http\Resources\ListingResource;
use Illuminate\Http\Request;
use App\Http\Requests\UpdateListingRequest;
use App\Http\Requests\StoreListingRequest;
use App\Models\Listing;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class ListingController extends Controller
{
    /**
     * Display a listing of the resource.
     */

     public function index(Request $request)
    {
        $user = $request->user();
        return ListingResource::collection(Listing::where('user_id', $user->id)->paginate);
    }

     /**
      * Return random listings
      */
    public function getRandomListings(Request $request)
    {
      $randomListings =  Listing::inRandomOrder()->limit(15)->get();
        return ListingResource::collection($randomListings);
    }

    /**
     * Return listings by location
     */

     public function getListingsByLocation(Request $request, string $locationId) {
        $listingsByLocation = Listing::where('location_id', $locationId)->get();
        return ListingResource::collection($listingsByLocation);
     }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreListingRequest $request)
    {
        $data = $request->validated();

        if(isset($data['image'])) {
            $relativePath = $this->saveImage($data['image']);
            $data['image'] = $relativePath;
        }

        $listing = Listing::create($data);

        return new ListingResource($listing);
    }

    /**
     * Display the specified resource.
     */
    public function show(Listing $listing, Request $request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateListingRequest $request, Listing $listing)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Listing $listing, Request $request)
    {
        //
    }

    public function saveImage($image) 
    {
        if (preg_match('/^data:image\/(\w+);base64,/', $image, $type)) {

            $image = substr($image, strpos($image, ',') + 1);

            $type = strtolower($type[1]); // .png , ,jpg

            if (!in_array($type, ['jpg', 'jpeg', 'gif', 'png'])) {
                throw new \Exception('invalid image type');
            }

            $image = str_replace(' ', '+', $image);
            $image = base64_decode($image);

            if ($image === false) {
                throw new \Exception('base64_decode failed');
            }

        } else {
            throw new Exeption('The image is not correctly formatted');
        }

        $dir = 'images/';
        $file = Str::random() . '.' . $type;
        $absolutePath = public_path($dir);
        $relativePath = $dir . $file;

        if (!File::exists($absolutePath)) {
            File::makeDirectory($absolutePath, 0755, true);
        }
        file_put_contents($relativePath, $image);

        return $relativePath;
    }
}