<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name'     => 'admin',
            'email'    => 'jduartesilvio@gmail.com',
            'password' => Hash::make('4694'),
            'role'     => 'admin',
        ]);
    }
}