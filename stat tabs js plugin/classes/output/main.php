<?php
namespace block_groupstats\output;
defined('MOODLE_INTERNAL') || die();

use renderable;
use renderer_base;
use templatable;

class main implements renderable, templatable {
    public function export_for_template(renderer_base $output) {

        $imageurl = $output->image_url('student', 'block_groupstats')->out();
        return [
            'imgurl' => $imageurl,
        ];
    }
}
