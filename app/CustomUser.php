<?php
 
namespace App;
 
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
 
class CustomUser extends Authenticatable
{
    use Notifiable;
 
    protected $table = 'ea_users';
 
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [];
 
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'user_password', 'remember_token',
    ];
 
 
    public function getAuthPassword()
    {
      return $this->user_password;
    }
}