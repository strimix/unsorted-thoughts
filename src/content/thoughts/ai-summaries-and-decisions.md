---
title: Can You Trust an AI Summary
titleEmphasis: Enough to Make a Decision?
dek: 'Three levels of verification: summary fidelity, inference validity, and decision sufficiency.'
date: 2026-10-13
tags:
  - AI
  - Reasoning
  - Management
minutes: 10
number: 1
cover: constructivist
draft: false
---

“The API is ready. We're launching on Friday.”

Can we confirm the date with the client?

I've spent my entire career working with data, and one thing I've learned is that accurate information alone isn't enough to make a well-informed decision.

Now that I'm exploring how AI-generated summaries can support decision-making, I'm looking at the same challenge from a different angle: how can we tell whether a summary gives us a reliable basis for action?

I use three levels to assess whether an AI summary is reliable enough to inform a decision:

1. **Summary fidelity:** Does the summary accurately represent the original messages?
2. **Inference validity:** Do its conclusions actually follow from the available evidence?
3. **Decision sufficiency:** Is that evidence enough to act on, given what remains unknown and the consequences of getting it wrong?

An accurate summary does not guarantee a valid conclusion, and a valid conclusion does not necessarily provide enough information to make a decision.

## Level 1. Summary fidelity

Consider a fictional example involving three messages in a team chat:

- **Developer:** The code has been deployed to the test environment.
- **QA:** Still waiting for test data. Testing isn't complete.
- **Sales:** We're discussing a Friday launch with the client.

The AI produces this summary:

> The team is preparing for a Friday launch. The API is ready, and QA is carrying out final testing.

It sounds perfectly reasonable.

But QA is waiting for test data, not necessarily carrying out final testing. Friday has shifted from a date under discussion to an apparent plan. And “deployed to the test environment” has become “ready”.

The model hasn't necessarily invented an entirely new fact. Instead, it has connected separate statements into a coherent narrative, filling in the gaps along the way.

The problem is that the underlying situation may still be uncertain, while the polished summary makes it sound settled.

### A message is not evidence of a completed state

It helps to distinguish three things.

**Message:** “The code has been deployed to the test environment.” This is what the developer reported.

**Interpretation:** “The API is ready for the client launch.” This is a conclusion that the message itself does not support.

**Actual state:** What has really happened, regardless of what anyone has reported. Has the code been deployed? Has testing been completed? These questions can be checked against deployment records, CI results and QA sign-off.

A message is one source of information about the actual state of work. It is not necessarily a complete or independently verified account of that state.

The problem arises when an AI summary presents an interpretation as an established fact.

This isn't unique to software development. In logistics, a supplier confirming dispatch doesn't mean the goods have arrived at the warehouse. In recruitment, passing a technical interview doesn't mean a candidate is ready to receive an offer.

## Level 2. Inference validity

In the first example, we can identify the errors by comparing the summary with the original messages.

The more difficult case is when every individual message is represented accurately, but the conclusion drawn from them is wrong.

Imagine another conversation:

- **Developer:** API deployed.
- **QA:** All tests passed.
- **Sales:** Client confirmed Friday.

The AI concludes:

> The team is ready to launch on Friday.

Every source message is genuine. The summary includes links to the original messages. Nothing has been misquoted.

Yet the conclusion doesn't follow.

QA had tested the previous version of the API. The client had confirmed Friday for a demonstration, not a production launch. And a critical integration wasn't included in the testing scope.

The model has represented the individual facts correctly but combined them into a conclusion that the available context doesn't justify.

**The sources support the individual statements, not necessarily the relationship between them.**

The same problem appears when interpreting missing information.

“No critical blockers were found” can easily become “There are no blockers”.

Those statements are not equivalent.

This is why verifiability means more than attaching a source to every claim. We also need to establish whether the available evidence actually supports the conclusion being made.

## Level 3. Decision sufficiency

The third level is harder to spot because the model may be correct both in its summary and in its reasoning.

Suppose the AI accurately establishes that the API has been deployed, tests have passed on the correct version, and the client has explicitly agreed to a Friday launch.

The conclusion that the technical and scheduling conditions have been met is justified.

But can we actually launch?

We still don't know whether security approval has been obtained, whether the rollback plan has been signed off, or who has the authority to give the final go-ahead.

The conclusion may be valid, but it doesn't answer everything the decision requires.

Two factors make this particularly important.

**The first is fragmented context.**

Work happens across Slack or Teams, email, messaging apps and meetings. An AI summary may have access to only some of these sources, and the information it can access may be updated at different times.

Checking everything manually is time-consuming. As a result, the summary can become the team's primary view of what is happening, even when that view is incomplete.

**The second is the cost of getting the decision wrong.**

An inaccurate routine status update might have little consequence. But a launch date confirmed to a client, a job offer sent, or an incident marked as resolved can be difficult to reverse.

The mistake may only become visible after the decision has affected people outside the team.

The more fragmented the context and the greater the consequences, the more important it becomes for an AI summary to show both what it knows and what it doesn't.

Not because the model will necessarily be wrong, but because an unsupported conclusion may otherwise go unnoticed until someone acts on it.

### Sometimes the problem isn't AI at all

If a team hasn't agreed on what “ready” means, which conditions must be met, or who has the authority to sign off, even a perfectly accurate summary cannot establish launch readiness.

But it can reveal something more valuable: conflicting definitions of readiness, unclear ownership, or decisions that were discussed but cannot be confirmed from the available information.

Management isn't just about understanding what's happening. It's also about organising how work gets done: defining responsibilities, coordinating people, and establishing how decisions are made.

AI can help identify where that system breaks down.

What to do about it is another story.

## Six checks before making a decision

1. **What exactly is ready?** “Deployed to the test environment” doesn't mean “tested and ready for the client”.
2. **What has been decided, and what is still being discussed?** Sales are discussing Friday, but the available messages don't confirm the date.
3. **What does the next step depend on?** QA is waiting for test data. Without knowing who will provide it and when, we can't establish whether testing is on track.
4. **How current is the information?** QA's message might already be outdated. The test data could have arrived this morning. An answer generated a minute ago can still rely on a conversation from last week.
5. **What remains unknown?** “No confirmation found” is not the same as “No confirmation exists”. The date might have been agreed during a meeting or in another channel. That's a reason to investigate, not to assume.
6. **Is the confirmed information sufficient for the decision?** Even when a conclusion is justified, check whether the other requirements have been met: approvals, dependencies, readiness criteria and decision-making authority.

These checks are useful even without AI. But AI makes them more important because a fluent, confident summary can make missing information harder to notice than it would be in the original conversation.

That doesn't mean every summary needs the same level of scrutiny.

For a routine daily update, source links and clearly identified unknowns may be enough. As uncertainty and the consequences of an error increase, so should the depth of verification.

Otherwise, we risk spending more time checking the output than AI saved us in the first place.

## Why prompting isn't enough

We can instruct a model to distinguish facts from assumptions, cite its sources and highlight missing information.

That's a sensible starting point, and for simpler tasks it may be sufficient.

But a prompt defines what we want the model to do. It doesn't verify that the model has actually done it.

A prompt cannot give the model access to information it hasn't received, refresh outdated source data, or guarantee that a citation supports the claim attached to it.

For example, the model might follow an instruction to “provide a source for every claim” and cite the developer's message as evidence that the API is ready.

But the developer only confirmed deployment to a test environment.

The citation is real. The claim is not supported by it.

**A source link is not the same as evidence that supports a conclusion.**

Of course, if we have to inspect every claim and open every source manually, we're back to the problem we were trying to solve with AI.

That raises a more interesting engineering question:

How can we automate the verification of conclusions, supporting evidence and information freshness without creating another illusion of reliability?

## What a useful AI summary looks like

Let's return to the first example.

A more useful summary might look like this:

<div class="example">

According to the developer, the code has been deployed to the test environment.

QA is waiting for test data and has not completed testing.

Sales are discussing a Friday launch with the client. No confirmation of the launch date was found in the available messages.

**Before confirming the date:** establish who will provide the test data and when, which conditions must be met before launch, and who is responsible for confirming that those conditions have been satisfied.

</div>

It's less impressive than the original AI-generated summary.

But it makes clear what needs to be checked, what remains unknown, and who needs to be involved.

The AI brings the available context together. The decision remains with the people responsible for making it.

If an AI summary is going to inform management decisions, I would expect the system to provide at least four things:

- **Traceable evidence** for every significant conclusion.
- **Clear distinctions** between what has been reported, discussed and confirmed.
- **Source timestamps** showing how current the underlying information is.
- **Explicit unknowns** identifying what could not be established from the available evidence.

## The takeaway

Before relying on an AI summary, ask yourself:

**What has actually been confirmed? What assumptions has the model quietly made? And is the available evidence sufficient for the decision?**

A good AI summary isn't the one that sounds most confident.

It's the one that helps you understand what to verify, what remains uncertain, and who to ask before you act.
