<?php

defined('MOODLE_INTERNAL') || die();

class block_testblock extends block_base
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
        $this->title = get_string('pluginname', 'block_testblock');
    }

    /**
     * @throws coding_exception
     */
    function get_content()
    {
        global $CFG;
        //require_once($CFG->dirroot . 'blocks/testblock/testform.php');
        if ($this->content !== NULL) {
            return $this->content;
        }
        $this->content = new stdClass;


        $this->content->text = '';

        $mform = new \block_testblock\form\testform();

        //Form processing and displaying is done here
        if ($mform->is_cancelled()) {
            //Handle form cancel operation, if cancel button is present on form
        } else if ($fromform = $mform->get_data()) {
            //In this case you process validated data. $mform->get_data() returns data posted in form.
        } else {
            // this branch is executed if the form is submitted but the data doesn't validate and the form should be redisplayed
            // or on the first display of the form.

            //Set default data (if any)
            //$mform->set_data($toform);

            //displays the form
            //$template = new \block_testblock\output\testblock(1);
            //$renderer = $this->page->get_renderer('block_testblock');
            //$this->content->text = $renderer->render($template);

            $this->content->text = $mform->render();
        }

        $this->page->requires->css('/blocks/testblock/styles.css');

        return $this->content;
    }
}
