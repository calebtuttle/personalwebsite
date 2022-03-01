// Dictionary where {key: value} is {nameOfPost: PostComponent}
import React from 'react';

import NoteContainer from './components/NoteContainer';

import WhatIsDeSciMarkdown from './posts/markdown/what-is-desci.md';
import AnAnalogyBetweenKantAndBlockchainsMarkdown from './posts/markdown/an-analogy-between-kant-and-blockchains.md';
import DecisionMakingFunctionMarkdown from './posts/markdown/decision-making-function-notes.md';
import HashTablesAndRussellsTheoryOfDescriptionsMarkdown from './posts/markdown/hash-tables-and-russells-theory-of-descriptions.md';
import InternalConflictAndTheInternalCommunityMarkdown from './posts/markdown/internal-conflict-and-the-internal-community.md';
import MaslowsHierarchyOfNeedsAsAUtilityFunctionMarkdown from './posts/markdown/maslows-hierarchy-of-needs-as-a-utility-function.md';
import NotesOnFriendshipMarkdown from './posts/markdown/notes-on-friendship.md';
import NotesOnPracticalScienceMarkdown from './posts/markdown/notes-on-practical-science.md';
import NotesOnPotencyActivityAndFunctionMarkdown from './posts/markdown/notes-on-the-analogy-between-a-potency-activity-and-a-function.md';
import StartingToLearnAboutThePhilosophyOfScienceMarkdown from './posts/markdown/starting-to-learn-about-the-philosophy-of-science.md';


const postsDictionary = {
  whatIsDeSci: <NoteContainer title="What is DeSci?" markdown={WhatIsDeSciMarkdown} />,
  anAnalogyBetweenKantAndBlockchains: <NoteContainer title="An Analogy Between kant and Blockchains" markdown={AnAnalogyBetweenKantAndBlockchainsMarkdown} />,
  decisionMakingFunction: <NoteContainer title="Decision Making Function - Notes" markdown={DecisionMakingFunctionMarkdown} />,
  hashTablesAndRussellsTheoryOfDescriptions: <NoteContainer title="Hash Tables and Russell's Theory of Descriptions" markdown={HashTablesAndRussellsTheoryOfDescriptionsMarkdown} />,
  internalConflictAndTheInternalCommunity: <NoteContainer title="Internal Conflict and the Internal Community" markdown={InternalConflictAndTheInternalCommunityMarkdown} />,
  maslowsHierarchyOfNeedsAsAUtilityFunction: <NoteContainer title="Maslow's Hierarchy of Needs as a Utility Function" markdown={MaslowsHierarchyOfNeedsAsAUtilityFunctionMarkdown} />,
  notesOnFriendship: <NoteContainer title="Notes on Friendship" markdown={NotesOnFriendshipMarkdown} />,
  notesOnPracticalScience: <NoteContainer title="Notes on Practical Science" markdown={NotesOnPracticalScienceMarkdown} />,
  notesOnPotencyActivityAndFunction: <NoteContainer title="Notes on an Analogy Between Aristotle’s Potency-Activity Coupling and Functions in Programming" markdown={NotesOnPotencyActivityAndFunctionMarkdown} />,
  startingToLearnAboutThePhilosophyOfScience: <NoteContainer title="I'm Starting to Learn About The Philosophy of Science" markdown={StartingToLearnAboutThePhilosophyOfScienceMarkdown} />,
}

export default postsDictionary
