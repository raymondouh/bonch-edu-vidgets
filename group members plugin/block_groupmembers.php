<?php
defined('MOODLE_INTERNAL') || die();

class block_groupmembers extends block_base
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
        $this->title = get_string('pluginname', 'block_groupmembers');
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
        $template = new \block_groupmembers\output\groupmembers(29, 3);
        $renderer = $this->page->get_renderer('block_groupmembers');
        $this->content->text = $renderer->render($template);
        $this->page->requires->css('/blocks/groupstats/styles.css');

        return $this->content;
    }
}
