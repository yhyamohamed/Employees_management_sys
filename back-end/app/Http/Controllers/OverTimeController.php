<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOverTimeRequest;
use App\Http\Requests\UpdateOverTimeRequest;
use App\Models\OverTime;

class OverTimeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreOverTimeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOverTimeRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OverTime  $overTime
     * @return \Illuminate\Http\Response
     */
    public function show(OverTime $overTime)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateOverTimeRequest  $request
     * @param  \App\Models\OverTime  $overTime
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateOverTimeRequest $request, OverTime $overTime)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OverTime  $overTime
     * @return \Illuminate\Http\Response
     */
    public function destroy(OverTime $overTime)
    {
        //
    }
}
