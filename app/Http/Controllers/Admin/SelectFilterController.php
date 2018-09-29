<?php

namespace App\Http\Controllers\Admin;

use App\Country;
use Yajra\DataTables\DataTables;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Datatable;

class SelectFilterController extends Controller
{
    public function index()
    {
        return view('admin.examples.selectfilter');
    }
    public function filter(Request $request)
    {

        $term = trim($request->q);

        if (empty($term)) {
            return \Response::json([]);
        }

        $tags = Country::search($term)->limit(5)->get();

        $formatted_tags = [];

        foreach ($tags as $tag) {
            $formatted_tags[] = ['id' => $tag->id, 'text' => $tag->name];
        }

        return \Response::json($formatted_tags);

    }
    public function store(Country $country, Request $request)
    {
        $val =$request->newTag;
        if (is_numeric($val)){
           return false;
        }
        $check = Country::where('name',$request->newTag)->first();
        if ($check === null) {
            $country->name = $request->newTag;
            $country->countri_id = $request->newTag;
            $country->save();
        }
    }

}
