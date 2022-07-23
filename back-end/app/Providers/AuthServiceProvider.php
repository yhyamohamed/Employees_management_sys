<?php

namespace App\Providers;

use App\Models\Attendance;
use App\Models\Complaint;
use App\Models\Leave;
use App\Models\OverTime;
use App\Models\Task;
use App\Models\Vacation;
use App\Policies\AttendancePolicy;
use App\Policies\ComplaintPolicy;
use App\Policies\LeavePolicy;
use App\Policies\OverTimePolicy;
use App\Policies\VacationPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
        Vacation::class=>VacationPolicy::class,
        Attendance::class=>VacationPolicy::class,
        Complaint::class=>VacationPolicy::class,
        Leave::class=>VacationPolicy::class,
        OverTime::class=>VacationPolicy::class,
        Task::class=>VacationPolicy::class
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //
    }
}
