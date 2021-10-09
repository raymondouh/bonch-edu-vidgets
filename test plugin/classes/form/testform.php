<?php
namespace block_testblock\form;
defined('MOODLE_INTERNAL') || die();

use moodleform;
global $CFG;

require_once("$CFG->libdir/formslib.php");

class testform extends moodleform {
    //Add elements to form
    /**
     * @var \MoodleQuickForm
     */

    public function definition() {
        //global $PAGE;

        $mform = $this->_form; // Don't forget the underscore!

        //$mform->addElement('text', 'email', get_string('email')); // Add elements to your form
        //$mform->setType('email', PARAM_NOTAGS);                   //Set type of element
        //$mform->setDefault('email', 'Please enter email');        //Default value

        $template = new \block_testblock\output\testblock(1);
        $renderer = $PAGE->get_renderer('block_testblock');
        $mform->addElement('html', $renderer->render($template));
    }
    //Custom validation should be added here
    function validation($data, $files) {
        return array();
    }
}
