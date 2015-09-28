<?php

namespace App\Console\Commands;

use DB;
use Auth;
use App\Trade;
use App\Hashtag;
use App\Portfolio;
use Illuminate\Console\Command;
use App\Repositories\TradesRepository as TradesRepository;
use App\Repositories\UsersRepository as UsersRepository;
use App\Repositories\PortfoliosRepository as PortfoliosRepository;

class HashtagClearup extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'hashtag:clearup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $results = DB::update( DB::raw("DELETE FROM hashtag_count WHERE created_at < DATE_SUB(CURDATE(), INTERVAL 5 DAY)"));
        $results = DB::update( DB::raw("DELETE FROM hashtag_price WHERE created_at < DATE_SUB(CURDATE(), INTERVAL 5 DAY)"));
    }
}
