<?php

namespace block_testblock\output;
defined('MOODLE_INTERNAL') || die();

use renderable;
use renderer_base;
use templatable;
use user_picture;

class testblock implements renderable, templatable
{
    private $groupmembers;
    private $groupmemberscount;
    private $students;

    public function export_for_template(renderer_base $output){
        return [
            'groupmembers' => $this->students
        ];
    }

    public function __construct($groupid)
    {
        $this->groupmembers = groups_get_members($groupid);
        $this->groupmemberscount = count($this->groupmembers);
        $this->collect_data();
    }

    private function collect_data()
   {
       global $CFG, $PAGE;
       $users = $this->groupmembers;
       foreach ($users as $user) {
           $this->userfullname = $user->firstname . ' ' . $user->lastname;
           $this->set_user_array($this->students);
       }
   }

   private function set_user_array(&$array)
   {
       $array[] = array(
           'fullname' => $this->userfullname,
       );
   }
}
