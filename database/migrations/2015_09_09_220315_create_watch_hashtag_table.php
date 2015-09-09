<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWatchHashtagTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('watch_hashtag', function(Blueprint $table)
        {
          $table->increments('id');
          $table->integer('user_id')->unsigned();
          $table->integer('hashtag_id')->unsigned();
          $table->timestamps();
          $table->foreign('user_id')->references('id')->on('users');
          $table->foreign('hashtag_id')->references('id')->on('hashtags');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::drop('watch_hashtag');
    }
}
