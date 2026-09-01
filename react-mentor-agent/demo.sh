#!/usr/bin/env bash
# A scripted 60-second tour of the agent adapting to a learner.
set -e
cd "$(dirname "$0")"
echo "### 1) Fresh learner, placed at Level 0"
node src/mentor.js reset "Demo Learner"
echo "### 2) Agent recommends where to start"
node src/mentor.js next
echo "### 3) Learn the first concept (explained at ELI5 depth)"
node src/mentor.js learn components | sed -n '1,14p'
echo "### 4) Build a live example to SEE it"
node src/mentor.js scaffold components
echo "### 5) Learner passes twice -> agent LEVELS UP and raises difficulty"
node src/mentor.js submit components pass | grep -E "mastery|Level"
node src/mentor.js submit props pass | grep -E "mastery|Level|Level up"
echo "### 6) Progress dashboard"
node src/mentor.js status
