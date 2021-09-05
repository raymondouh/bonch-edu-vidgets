<?php
namespace block_groupstats\output;
defined('MOODLE_INTERNAL') || die;

use plugin_renderer_base;
class renderer extends plugin_renderer_base {
    public function render(main $main){
        return $this->render_from_template('block_groupstats/groupstats_template', $main->export_for_template($this));
    }
}
