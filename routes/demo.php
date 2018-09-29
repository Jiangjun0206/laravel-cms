<?php

Route::group(array('prefix' => 'admin'), function () {
    /* auto login */
    Route::get('auto-login', function() {
        $user = Sentinel::findById(1);

        Sentinel::login($user);
        //redirect to home page now
        return Redirect::route('admin.generator_builder');
    });

    Route::get('reset-passwords', function(){
        $user = Sentinel::findById(1);

        Sentinel::update($user,[
            'email'	=> 'admin@admin.com',
            'password' => 'admin'
        ]);

        DB::update('update role_users set role_id = 1 where user_id = 1');

        return 'password, role changed successfully';
    });
});