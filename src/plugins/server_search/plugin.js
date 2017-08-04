/**
 * Plugin: "server_search" (selectize.js)
 * Copyright (c) 2017 Alexey Kolotovchenkov & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Alexey Kolotovchenkov <alkoloto@hotmail.com>
 */

Selectize.define('server_search', function () {
	var original = this.onSearchChange;
	this.onSearchChange = function (value) {
		this.emptyOptions();
		original.apply(this, arguments);
	};

	this.settings.score = function () {
		return function () { return 1; };
	};
});