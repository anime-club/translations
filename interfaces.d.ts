type singleSourceOfTruth = import("./src/english").english

/**
 * English language is our source of truth for the
 * language object structure
 *
 * Therefore:
 *   - no need to retype anything here as language structure can change
 */
// declare type text = singleSourceOfTruth
declare type text = any
