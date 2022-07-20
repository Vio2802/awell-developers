import Link from 'next/link'
import React, { ReactNode } from 'react'

import {
  ReactDocs,
  stack,
} from '../../../../../../../content/awell-orchestration/docs/use-cases/custom-integration/stories/conversational-forms'
import { LinkButton } from '../../../../../../../src/components/Button'
import { DocsHeader } from '../../../../../../../src/components/Docs/atoms'
import { FAQ } from '../../../../../../../src/components/FAQ'
import { DocsLayoutWithoutToc } from '../../../../../../../src/components/Layouts'
import { SEO } from '../../../../../../../src/components/SEO'
import { StackSelector } from '../../../../../../../src/components/StackSelector'
import { useStack } from '../../../../../../../src/hooks/useStack'

export default function ConversationalFormsStoryPage() {
  const { frontEnd, backEnd, changeBackEnd, changeFrontEnd } = useStack()

  const onChangeStack = ({
    newFrontEnd,
    newBackEnd,
  }: {
    newFrontEnd?: string
    newBackEnd?: string
  }) => {
    if (newFrontEnd) {
      changeFrontEnd(newFrontEnd)
    }
    if (newBackEnd) {
      changeBackEnd(newBackEnd)
    }
  }

  return (
    <div>
      <SEO
        title="Conversational forms"
        description="Learn how to display a form question-by-question (conversational) and submit the response to the Awell API"
        url={`/awell-orchestration/docs/use-cases/custom-integration/stories/form/conversational-forms`}
        canonicalUrl={`/awell-orchestration/docs/use-cases/custom-integration/stories/form/conversational-forms`}
      />
      <div className="flex mb-8">
        <StackSelector
          selectedStack={{
            frontEnd: frontEnd,
            backEnd: backEnd,
          }}
          onStackChange={onChangeStack}
          stacks={stack}
        />
      </div>
      <DocsHeader
        heading={'Custom integration'}
        title={'Conversational forms'}
        description={
          'Learn how to display a form question-by-question (conversational) and submit the response to the Awell API'
        }
      />
      {/* Intro section */}
      <div className="max-w-4xl">
        <div id="content-wrapper">
          <p>
            <strong>
              The quickest way to get up and running with Awell is the
              &quot;Awell-hosted pathway page&quot;.
            </strong>{' '}
            This page will allow users to complete a pathway or flow and is a
            low-code integration.
          </p>
          <h2>Pathway lifecycle</h2>
          <p>
            The basic lifecycle for a hosted pathway experience looks like this:
          </p>
          <ol className="no-pl">
            <li>
              When a pathway needs to be started for a client, your application
              creates a new Pathway Session.
            </li>
            <li>
              The Pathway Session provides a URL that redirects your client to
              an Awell-hosted pathway page.
            </li>
            <li>
              Your client can interact with the pathway or care flow and
              complete activities.
            </li>
            <li>
              When the pathway is completed, a webhook (
              <code>pathway.completed</code>) is triggered to let you know the
              pathway is completed.
            </li>
          </ol>
          <figure className="w-full flex flex-col justify-center text-center pt-4">
            <img
              src="https://res.cloudinary.com/da7x4rzl4/image/upload/v1651756063/Developer%20portal/Sequence_Diagram_Template_Community.png"
              alt="Pathway versioning"
              className="rounded-lg w-full sm:w-11/12 mx-auto"
            />
            <figcaption className="dark:text-slate-400 pt-1">
              Hosted pathway lifecycle © Awell Health
            </figcaption>
          </figure>
          <h2>Low-code integration</h2>
          <p>
            The hosted pathway integration requires minimal coding.{' '}
            <Link href="/awell-orchestration/docs/getting-started/integrations-overview">
              <a title="this page">
                Compare the hosted pathway integration to other options
              </a>
            </Link>{' '}
            to determine which option meets your requirements .
          </p>
          <h2>Prerequisites</h2>
          <p>To get started, there are a couple of things you need:</p>
          <ol>
            <li>
              An <strong>API key</strong> to authorize requests to the Awell
              API. Click{' '}
              <Link href="/awell-orchestration/api-reference/overview/authorization">
                <a title="Get API key">here</a>
              </Link>{' '}
              to get your API key.
            </li>
            <li>
              A <strong>published pathway</strong> that meets the{' '}
              <Link href="/awell-orchestration/docs/getting-started/integrations-overview">
                <a title="requirements">requirements</a>
              </Link>{' '}
              to be used with the Awell hosted pathway page. Click{' '}
              <Link href="#">
                <a title="here">here</a>
              </Link>{' '}
              for a guide on creating such a pathway.
            </li>
          </ol>
        </div>
      </div>
      {/* Guide section */}
      <div>
        <h2>Get started</h2>
        {/* Set up front-end */}
        <div>
          {/* React */}
          {frontEnd === 'React' && <ReactDocs />}
        </div>
        {/* Test */}
        <div className="mt-12">
          <div className="flex flex-row mb-8">
            <div className="leading-none text-sm bg-slate-200 text-slate-600 rounded-full font-semibold mr-4 px-2.5 py-0.5 flex items-center">
              3
            </div>
            <div className="text-lg sm:text-xl text-slate-900 tracking-tight font-bold dark:text-slate-200">
              Test your page
            </div>
          </div>
          <div className="flex gap-8">
            <div className="max-w-4xl flex flex-col gap-4">
              <div className="relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600">
                <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                <div className="relative">
                  <p className="text-slate-700 dark:text-slate-200 mb-2">
                    <strong>Run the application</strong>
                  </p>
                  {frontEnd === 'React' && (
                    <p>
                      Start your applications (front-end and server) and
                      navigate to{' '}
                      <Link href="http://localhost:3000">
                        <a className="underline text-sky-500">
                          http://localhost:3000
                        </a>
                      </Link>
                      . Press the &quot;Start pathway session&quot; button to go
                      to the Awell hosted pathway page and complete the pathway.
                    </p>
                  )}
                </div>
              </div>
              <div className="relative bg-slate-50 border border-slate-200 rounded-xl p-6 text-left dark:bg-slate-800 dark:border-slate-600">
                <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                <div className="relative">
                  <p className="text-slate-700 dark:text-slate-200 mb-2">
                    <strong>Try it out</strong>
                  </p>
                  <p>
                    Click the button below to see a working example of the
                    hosted pathway page.
                  </p>
                  <div className="mt-4">
                    <LinkButton
                      label="Try it out"
                      color="sky"
                      href="/awell-orchestration/examples/hosted-pathway"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ */}
      <div className="mt-12">
        <FAQ
          faqs={[
            {
              question:
                'Can we apply custom branding on the hosted pathway page?',
              answer:
                "No, you can't. However, we are working on making some minimal branding options available like changing the logo and accent color. For full control over your UI we recommend setting up a custom integration.",
            },
            {
              question:
                'Can we create a custom domain for the hosted pathway page?',
              answer:
                "No, custom domains are not yet supported. Let us know if you'd be interested in that!",
            },
            {
              question: 'How long before a hosted pathway session expires?',
              answer:
                'By default, sessions expire after 15 minutes but the timer is reset after every completion of an activity. A session also expires when the pathway is completed.',
            },
          ]}
        />
      </div>
      <div className="mt-12">{/* <QuickNav prev={prev} next={next} /> */}</div>
    </div>
  )
}

ConversationalFormsStoryPage.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayoutWithoutToc>{page}</DocsLayoutWithoutToc>
}