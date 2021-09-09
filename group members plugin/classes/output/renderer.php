<?php
namespace block_groupmembers\output;
defined('MOODLE_INTERNAL') || die;

use plugin_renderer_base;
class renderer extends plugin_renderer_base {
    public function render(groupmembers $groupmembers){
        return $this->render_from_template('block_groupmembers/groupmembers_template', $groupmembers->export_for_template($this));
    }
}
