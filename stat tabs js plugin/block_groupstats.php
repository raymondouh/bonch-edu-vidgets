<?php
defined('MOODLE_INTERNAL') || die();

class block_groupstats extends block_base
{

    function hide_header(): bool
    {
        return true;
    }

    function allow_multiple(): bool
    {
        return false;
    }

    /**
     * @throws coding_exception
     */
    function init()
    {
        $this->title = get_string('pluginname', 'block_groupstats');
    }

    /**
     * @throws coding_exception
     */
    function get_content()
    {
        if ($this->content !== NULL) {
            return $this->content;
        }
        $this->content = new stdClass;
        $template = new \block_groupstats\output\groupstats(3, 1);
        $renderer = $this->page->get_renderer('block_groupstats');
        $this->content->text = $renderer->render($template);
        $this->page->requires->js_call_amd('block_groupstats/groupstats', 'init', $template->export_for_js());
        $this->page->requires->css('/blocks/groupstats/styles.css');

        return $this->content;
    }
}
