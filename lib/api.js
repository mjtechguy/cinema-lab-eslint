/**
 * @fileoverview Expose out ESLint and CLI to require.
 * @author Ian Christian Myers
 */

"use strict";

//-----------------------------------------------------------------------------
// Requirements
//-----------------------------------------------------------------------------

const { ESLint } = require("./eslint/eslint");
const { Linter } = require("./linter");
const { RuleTester } = require("./rule-tester");
const { SourceCode } = require("./languages/js/source-code");

//-----------------------------------------------------------------------------
// Functions
//-----------------------------------------------------------------------------

/**
 * Loads the correct `ESLint` constructor.
 * @returns {Promise<ESLint>} The ESLint constructor.
 */
async function loadESLint() {
	return ESLint;
}

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

module.exports = {
	Linter,
	loadESLint,
	ESLint,
	RuleTester,
	SourceCode,
};

// lab: PR experiment 2026-10-21T18:07:35Z
