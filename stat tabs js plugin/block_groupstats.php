<?php
defined('MOODLE_INTERNAL') || die();
class block_groupstats extends block_base {

    function hide_header() {
        return true;
    }

    function init() {
       $this->title = get_string('pluginname', 'block_groupstats');
    }

    function get_content() {
        if ($this->content !== NULL) {
        return $this->content;
        }
        $this->content = new stdClass;
        $renderable = new \block_groupstats\output\main();
        $renderer = $this->page->get_renderer('block_groupstats');

        $this->content->text = $renderer->render($renderable);
        $this->page->requires->js_call_amd('block_groupstats/groupstats','init');
        $this->page->requires->css( '/blocks/groupstats/styles.css');
        return $this->content;
    }
}
