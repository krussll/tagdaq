<?php namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel {

	/**
	 * The Artisan commands provided by your application.
	 *
	 * @var array
	 */
	protected $commands = [
		'App\Console\Commands\ProfileClearup',
		'App\Console\Commands\UpdateHashtags',
		'App\Console\Commands\ProfilePull',
		'App\Console\Commands\ProfilePriceCommand'
	];

	/**
	 * Define the application's command schedule.
	 *
	 * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
	 * @return void
	 */
	protected function schedule(Schedule $schedule)
	{
		$schedule->command('profile:pull')->everyThirtyMinutes();
		$schedule->command('profile:price')->hourly();
		$schedule->command('profile:clearup')->daily();
	}
}
