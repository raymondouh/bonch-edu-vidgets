<?php
namespace block_testblock\output;
defined('MOODLE_INTERNAL') || die;

use plugin_renderer_base;
class renderer extends plugin_renderer_base {
    public function render(testblock $block_testblock){
        return $this->render_from_template('block_testblock/testblock_template', $block_testblock->export_for_template($this));
    }
}
