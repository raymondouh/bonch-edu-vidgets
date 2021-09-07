<?php
namespace block_groupstats\output;
defined('MOODLE_INTERNAL') || die();

use renderable;
use renderer_base;
use templatable;
use user_picture;

class main implements renderable, templatable {

    public function export_for_template(renderer_base $output) {
        $problemstudents = $this->get_problem_students();
        return [
            'problemstudents' => $problemstudents
        ];
    }

    private function get_problem_students(){
        global $CFG, $PAGE;
        $course = get_course("3");
        $users = groups_get_members('1');
        $problemstudents = array();

        foreach ($users as $user) {
            $user_picture=new user_picture($user);
            $src=$user_picture->get_url($PAGE);

            $userfullname = $user->firstname . ' ' . $user->lastname;
            $userprofile = $CFG->wwwroot.'/user/view.php?id='.$user->id.'&amp;course='. $course->id;

            //if no userpicture you can get this
            //$imageurl = $output->image_url('student', 'block_groupstats')->out();

            $problemstudents[] = array(

                'fullname'=> $userfullname,
                'picturesrc' => $src,
                'userprofile' => $userprofile
            );
        }
        return $problemstudents;
    }
}
