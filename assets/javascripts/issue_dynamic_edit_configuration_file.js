/*
 * CONFIGURATION FILE
 * More info on https://github.com/Ilogeek/redmine_issue_dynamic_edit
 */

/*
 * _CONF_FORCE_HTTPS (boolean)
 * Will force AJAX call performed by the plugin to be done with https protocol
 * Use this value if you encounter some difficulties with "Mixed content" issues
 * Allowed values : false (default), true
 */
var _CONF_FORCE_HTTPS = true;

/*
 * _CONF_DISPLAY_EDIT_ICON (string)
 * Choose if hovering the details block will display all the pencil icons next to editable values or if the user has to hover every value to check if (s)he can edit it
 * Allowed values : single (default), block
 */
var _CONF_DISPLAY_EDIT_ICON = "block";

/*
 * _CONF_LISTENER_TYPE_VALUE (string)
 * Choose which action will trigger the apparition of the edition block
 * Allowed values : click (default), dblclick, none
 */
var _CONF_LISTENER_TYPE_VALUE = "click";

/*
 * _CONF_LISTENER_TYPE_ICON (string)
 * If different from _CONF_LISTENER_TYPE_VALUE, the action set below will trigger
 * the apparition of the edition block if it comes from the pencil icon.
 * Allowed values : click (default), dblclick, none
 */
var _CONF_LISTENER_TYPE_ICON = "click";

/*
 * _CONF_LISTENER_TARGET (string)
 * Choose which area will trigger the apparition of the edition block
 * "value" will target the whole line, "fa-pencil" will only target the pencil icon
 * Allowed values : value (default), fa-pencil
 */
var _CONF_LISTENER_TARGET = "value";

/*
 * _CONF_EXCLUDED_FIELD_ID (string array)
 * Choose which fields to exclude. They won't have the edit block and pencil
 * Custom fields have an unique ID and this ID must be prefixed by "issue_custom_field_values_". Eg : "issue_custom_field_values_4" is an allowed value
 * Allowed values : array of any ID selector (css). Eg : ["statusListDropdown", "StartDateInput", "TitleInput", "issue_custom_field_values_4"]
 */
var _CONF_EXCLUDED_FIELD_ID = [];
