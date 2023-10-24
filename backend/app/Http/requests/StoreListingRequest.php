<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreListingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }


    public function prepareForValidation() 
    {

        if( $this->user()->id) {
            $this->merge([
                'user_id' => $this->user()->id
            ]);
        }

        error_log('Some message here.', $this->user()->id);
        error_log('Some message here.', $this->user()->id);
        error_log('Some message here.', $this->user()->id);
        error_log('Some message here.');
        error_log('Some message here.');
        error_log('Some message here.');
    }
    // $this->user()->id
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string',
            'description'=> 'required|string',
            'user_id'=> 'exists:users,id',
            'status' => 'required|string',
            'image' => 'nullable|string',
        ];
    }
}
