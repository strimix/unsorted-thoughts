---
title: Is Your AI Agent Actually Helping,
titleEmphasis: or Just Playing the Part?
dek: 'An everyday customer support experience that turned into an unexpected lesson in AI agent engineering.'
date: 2026-10-24
tags:
  - AI
  - Agents
  - Engineering
minutes: 8
number: 2
coverImage: /covers/ai-agent-empathy-vs-resolution.png
coverAlt: 'Constructivist collage: POLITE ≠ HELPFUL ≠ EFFECTIVE — a smiling operator stamps SORRY papers while a customer sits with an empty box'
coverCaption: POLITE ≠ HELPFUL ≠ EFFECTIVE
ogImage: /covers/ai-agent-empathy-vs-resolution-og.jpg
draft: false
---

A few days ago, I had a surprisingly interesting conversation with an AI customer support assistant.

It started with something completely ordinary: a grocery delivery running almost three hours late.

The app kept showing an ETA of around 12 minutes. Unfortunately, those 12 minutes seemed to have a rather flexible relationship with time.

I opened the support chat.

The assistant was friendly, apologetic and reassuring. It acknowledged the delay and offered a small amount of store credit.

But I wasn't particularly interested in compensation.

I wanted to know whether my groceries were actually going to arrive.

The assistant couldn't provide a reliable delivery estimate.

It could, however, reassure me that the order was on its way.

And that was the beginning of a much more interesting story.

## 1. When confidence exceeds available information

At one point, the assistant acknowledged that it had no more accurate ETA than the one displayed in the app.

Yet it continued to reassure me that the delivery partner was actively heading towards my address and that the order should arrive soon.

There was one small complication.

The courier's location marker hadn't moved on the map throughout my wait.

Of course, a stationary marker doesn't necessarily mean a stationary courier. The location data itself could have been delayed or stale.

But that's precisely the point.

The assistant was making confident claims about something neither the app nor the conversation could reliably establish.

<div class="principle">

There's a difference between reporting a system state and claiming to know what's happening in the real world.

</div>

And for production AI agents, that difference matters.

## 2. Two systems, two versions of reality

Eventually, I cancelled the order through the app.

The app showed that it had been cancelled.

Later, I returned to the chat to ask about my refund.

The assistant reported that the order was still in transit.

I explained that it had been cancelled.

The assistant checked again and reported the same status.

I uploaded a screenshot, but the assistant explained that it couldn't inspect the attachment.

So we had an interesting situation:

- The customer-facing app displayed one state.
- The support assistant reported another.
- Neither side could reconcile the discrepancy through the conversation.

Later, I asked when the assistant's order information had last been updated.

It reported a timestamp nearly five hours old, while also saying it had refreshed the order details.

To its credit, it acknowledged that it couldn't establish whether the information was genuinely live or delayed.

That was actually one of the better responses in the conversation.

Because it exposed a distinction that is easy to overlook:

Refreshing a query doesn't guarantee that the underlying data is fresh.

There are many possible explanations for this kind of inconsistency: asynchronous updates, caching, different service boundaries, delayed events or something else entirely.

Without access to the system's internals, I wouldn't claim to know the cause.

But from the customer's perspective, the problem is simple.

The system couldn't establish which version of reality to trust.

And from an engineering perspective, that suggests an important requirement: agents need a strategy for handling conflicting evidence, not just a strategy for answering questions.

## 3. The difference between promising an action and completing one

After several unsuccessful attempts to resolve the issue, I asked to speak to a human.

The assistant initially requested more information, even though the conversation already contained the delivery delay, cancellation and refund question.

Eventually, it said it would transfer me.

Then it said so again.

And again.

For a while, I couldn't see any indication that a transfer was actually happening.

Later, after further messages, the interface finally showed that I was waiting for an agent.

A human joined.

So the handoff capability did work.

But there was a small plot twist.

I'd been connected to a support team for a different country.

The representative explained that I needed to contact the appropriate regional support channel.

The conversation ended without an answer to my refund question.

I don't know why the routing happened that way. It could have been related to regional settings, routing configuration or another factor.

But the experience revealed three very different definitions of success:

1. **The assistant says it will transfer the customer.**
2. **A transfer actually takes place.**
3. **The customer reaches someone who can resolve the issue.**

These are not equivalent.

<div class="principle">

Promising an action is not the same as completing one.

</div>

And that's an important distinction for anyone building agents that perform real-world actions.

## 4. The empathy was excellent. The progress was harder to find.

One thing the assistant did consistently well was acknowledge my frustration.

It was polite throughout.

It apologised for the delay, recognised that the situation was disappointing and maintained a calm tone even when I became less patient.

That's a useful capability.

But after a while, I noticed something curious.

The emotional quality of the conversation remained high while the practical value barely changed.

The assistant could express understanding.

It couldn't establish a reliable ETA.

It couldn't reconcile the cancellation status.

It couldn't provide a confirmed refund timeline.

And the eventual escalation didn't reach the team that could help.

This raises a question about how we evaluate AI assistants.

Suppose we evaluate individual responses for:

- **Politeness**
- **Empathy**
- **Relevance**
- **Clarity**
- **Appropriate language**

The assistant might perform reasonably well.

Now suppose we evaluate the entire interaction:

Did the customer get their problem resolved?

That's a very different test.

A conversation can contain many individually acceptable responses and still be unsuccessful as a workflow.

## 5. What I'd test if I were building this system

Rather than treating this as an example of an LLM behaving badly, I think it's more useful to turn the experience into a small evaluation suite.

### State consistency

What happens when the app and the agent report different states for the same entity?

Can the agent identify the contradiction, verify freshness and escalate when necessary?

### Evidence-grounded claims

Does the agent distinguish between information returned by a tool and conclusions inferred from that information?

Can it avoid turning a generic status into an unsupported promise?

### Action verification

When the assistant says it has initiated an action, is that statement backed by an observable result?

Can the system distinguish between an intended action, an attempted action and a completed action?

### Escalation routing

Does the handoff reach a team with the right permissions, regional context and ability to help?

Is success measured by the transfer event or by the outcome of the transfer?

### Failure recovery

When the same approach fails repeatedly, does the agent change strategy?

Or does it continue producing variations of an otherwise reasonable response?

### End-to-end resolution

Can we evaluate the full customer journey rather than only the quality of individual messages and tool calls?

These aren't particularly exotic requirements.

They're the kinds of reliability questions we've been asking about distributed systems and business workflows for years.

AI agents simply make them more visible, because the interface can remain convincing even when the underlying workflow isn't progressing.

## 6. Maybe the model isn't the most interesting part

It's tempting to respond to experiences like this by suggesting a better model, a more sophisticated prompt or a larger context window.

Those improvements might help.

But they wouldn't necessarily solve the underlying problems.

A better model doesn't automatically make stale data fresh.

A better prompt doesn't guarantee that a tool's execution was verified.

A more natural conversation doesn't ensure that a customer reaches the correct support team.

These are system design concerns.

They involve data contracts, state management, orchestration, observability, access boundaries and evaluation.

The LLM is an important component.

But the customer experiences the entire system.

And that's ultimately what needs to work.

## Final thought

I started the conversation hoping to find out when my groceries would arrive.

I ended it thinking about state consistency, action verification and end-to-end agent evaluation.

Not exactly the evening I had planned.

To be fair, the assistant was consistently polite, occasionally transparent about its limitations, and eventually connected me to a human.

Those are real positives.

But the experience was a useful reminder that a well-behaved AI assistant and a reliable AI-powered service are two different achievements.

<div class="principle">

Performing helpfulness is not the same as delivering help.

</div>

We spend a lot of time improving how agents communicate.

Perhaps we should spend just as much time verifying what they actually accomplish.

Because the ultimate measure of an AI agent isn't how convincingly it says "I'm helping."

It's whether the system can demonstrate that help actually happened.
