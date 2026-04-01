<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UsersSeeder extends Seeder
{
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'admin',
            'email' => 'admin@outlook.com',
            'role' => 'admin',
            'password' => Hash::make('9090'),
            'created_at' => Now(),
            'updated_at' => Now()
        ]);
        DB::table('users')->insert([
            'name' => 'test2',
            'email' => 'test2@outlook.com',
            'role' => 'user',
            'password' => Hash::make('9090'),
            'created_at' => Now(),
            'updated_at' => Now()
        ]);
        DB::table('users')->insert([
            'name' => 'test3',
            'email' => 'test3@outlook.com',
            'role' => 'user',
            'password' => Hash::make('9090'),
            'created_at' => Now(),
            'updated_at' => Now()
        ]);
    }
}

//or
$data = ['Sport','Education','Life'];
foreach ($data as $item) {
    DB::table('categories')->insert([
        "name" => $item,
        "slug" => Str::slug($item),
        "created_at" => now(),
        "updated_at" => now()
    ]);
}
