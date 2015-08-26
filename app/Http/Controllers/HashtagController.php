<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use View;


class HashtagController extends BaseController
{
    public function search($term)
    {
    	return View::make('hashtag.search', array('term' => $term));
    }

    public function show($id)
    {
    	return View::make('hashtag.show', array('id' => $id));
    }
}
