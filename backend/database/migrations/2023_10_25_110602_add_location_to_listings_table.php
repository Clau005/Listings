<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('listings', function (Blueprint $table) {
            $table->string('location');
            $table->integer('beds');
            $table->integer('baths');
            $table->integer('price');
            $table->string('floor')->nullable();
            $table->string('property_type');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('listings', function (Blueprint $table) {
            $table->dropColumn('location');
            $table->dropColumn('beds');
            $table->dropColumn('baths');
            $table->dropColumn('price');
            $table->dropColumn('floor')->nullable();
            $table->dropColumn('property_type');
        });
    }
};
