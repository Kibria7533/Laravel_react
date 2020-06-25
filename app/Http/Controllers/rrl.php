<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use DB;
use App\rrlm;

class rrl extends Controller
{
  
    public function index()
    {
        $data=DB::table('rrlt')->get();
        return $data;
       
    }

   
    public function store(Request $request)
    {
        $data=new rrlm;
        $data->name=$request->name;
        $data->save();

        $last=rrlm::orderBy('created_at', 'desc')->first();
        return $last;
   
    }

   
 
    public function update(Request $request)
    {
        $data=DB::table('rrlt')->where('id',$request->id)->update([
            'name'=>$request->name
        ]);
        return $request;
    }

   
    public function destroy($id)
    {
        
        DB::table('rrlt')->delete($id);
        
    }
}
