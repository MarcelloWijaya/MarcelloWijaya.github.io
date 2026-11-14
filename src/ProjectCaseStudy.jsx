import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Check, Copy, Moon, Sun } from 'lucide-react';
import './project-case-study.css';
import { companyProfiles } from './data/companyProfiles';
import { BrandMark } from './BrandMark';
import { t } from './i18n';

const caseStudies = {
  taxflow: {
    title:'TaxFlow',
    status:'PERSONAL PROJECT · LOCAL DEVELOPMENT',
    summary:'A local SPT working-paper application for organizing personal income-tax data, reviewing source documents, and exporting supported asset records as XML.',
    role:'Independent software project · local workspace',
    format:'Laravel web application · local-only workflow',
    statusDetail:'Under development · not a DJP filing service',
    sections:[
      {label:'PRODUCT SCOPE',title:'Organize personal tax working papers',intro:'TaxFlow supports tax worksheets for multiple taxpayers and tax years while keeping account data separated.',points:[
        'Track yearly worksheet data, income details, bank-interest entries, and supporting information.',
        'Use version checks to reduce accidental overwrites across concurrent editing sessions.',
        'Generate printable reports, Excel archives, and JSON backups for review and recovery.'
      ]},
      {label:'DOCUMENT REVIEW',title:'Review figures before importing',intro:'Uploaded supported PDF statements can be inspected and matched to tax worksheet records with an explicit preview and confirmation step.',points:[
        'Extract supported financial-document figures with format-specific parsing and OCR-assisted workflows.',
        'Review selected values, destination accounts, and before/after effects before saving.',
        'Keep unsupported or ambiguous figures for manual checking rather than assuming their meaning.'
      ]},
      {label:'CORETAX EXPORT LIMITS',title:'Export selected asset categories, not a completed tax filing',intro:'The application can produce XML for selected cash and investment asset lists using documented schema validation.',points:[
        'Validate fields and generate supported L-1 asset XML output for manual import.',
        'Keep the final Coretax import, signature and submission outside this local application.',
        'Do not claim consultant-office workflows, DJP submission APIs, or official production acceptance.'
      ]}
    ],
    stack:['Laravel 13','Livewire 4','PHP','Tailwind CSS 4','SQLite','Node.js'],
    note:'Local development. Tax data is sensitive and no real client information is shown. XML coverage is limited to supported asset categories; submission to DJP/Coretax is not automated.'
  },
  'ijt-stockflow': {
    title:'IJT StockFlow',
    status:'PERSONAL PROJECT · MVP IN DEVELOPMENT',
    summary:'A locally hosted inventory and stock-opname solution for workshop workflows, warehouse stock movements, and barcode-assisted operations.',
    role:'Independent application development · inventory operations',
    format:'Laravel API + Vue PWA · local deployment',
    statusDetail:'MVP source code exists · operational testing pending',
    sections:[
      {label:'INVENTORY WORKFLOWS',title:'Track stock movements and physical counts',intro:'The MVP code includes product and warehouse management with stock-movement and stock-opname flows.',points:[
        'Record stock in/out and warehouse transfers with transaction validation.',
        'Create stock-opname sessions, count physical stock, review differences, and approve adjustments.',
        'Maintain stock movement history and support basic supplier and purchase-order workflows.'
      ]},
      {label:'SCANNING & INTELLIGENCE',title:'Make stock lookup and replenishment more practical',intro:'The frontend includes camera and USB/Bluetooth barcode scanner interfaces alongside stock insights.',points:[
        'Scan or enter SKUs for lookup, stock transactions, and counting workflows.',
        'Surface low-stock alerts, reorder-point settings, fast/slow-moving items, and indicative dead stock.',
        'Support CSV import/export and Owner/Admin-oriented operational controls.'
      ]},
      {label:'VALIDATION & LIMITS',title:'Code-complete features still require real-world testing',intro:'This project is an in-development MVP, not a publicly deployed inventory system.',points:[
        'Complete cross-device camera-scanner testing and internal HTTPS setup before production use.',
        'Verify multi-user stock consistency, backup/restore, permission boundaries, and operational flows.',
        'Keep internal data and source repositories private.'
      ]}
    ],
    stack:['Laravel 13','Vue 3','TypeScript','Vite','PWA','PostgreSQL','ZXing'],
    note:'In-development local MVP. Real-device scanning, complete integration tests, and production sign-off are still pending. MySQL is supported as an alternative local setup; no production database is asserted.'
  },
  dearly: {
    title: 'Dearly',
    status: 'PERSONAL PROJECT · LOCAL WINDOWS APP',
    summary: 'A local app for organizing invitation guests and managing personalized WhatsApp messages through one practical workflow.',
    role: 'Independent, end-to-end project',
    format: 'Local Windows application',
    statusDetail: 'No public demo or images yet',
    sections: [
      {
        label: 'PRODUCT SCOPE',
        title: 'From guest list to invitation message',
        intro: 'Dearly brings recipient management and invitation messaging together in a Windows-local tool for personal broadcasts.',
        points: [
          'Import and organize recipient lists, categories, and message templates.',
          'Preview personalized message content before sending.',
          'Schedule and control send queues, then review per-recipient reports.',
          'Manage workspaces and local backup/restore workflows.'
        ]
      },
      {
        label: 'IMPLEMENTATION',
        title: 'A local web interface with a Node.js server',
        intro: 'The application is served locally with Express 5. Its interface uses vanilla JavaScript; SQLite is the default database, with optional MySQL support. WhatsApp connectivity uses WhatsApp Web.js.',
        points: [
          'Node.js and Express 5 for the local application server.',
          'Vanilla JavaScript for the browser interface.',
          'SQLite by default; MySQL is supported as an alternative.',
          'WhatsApp Web.js provides the WhatsApp Web connection.'
        ]
      },
      {
        label: 'RELIABILITY & SAFETY',
        title: 'Make message state visible and recoverable',
        intro: 'A send attempt is not the same as confirmed delivery. The workflow keeps uncertainty, scheduling, and recovery visible instead of treating every attempt as success.',
        points: [
          'Pause, resume, or stop send queues; scheduled sends can be held for review when account or recipient data changes.',
          'Track outcomes per recipient, including failed, invalid, and uncertain states.',
          'Treat “sent” as submitted to WhatsApp—not proof of delivery or reading—and review uncertain outcomes before retrying.',
          'Keep workspaces separate and support local backups with a restore preview.'
        ]
      }
    ],
    stack: ['Node.js', 'Express 5', 'Vanilla JavaScript', 'WhatsApp Web.js', 'SQLite', 'MySQL (optional)'],
    note: 'WhatsApp Web.js is a third-party client, not the official WhatsApp Business API. This project is a local build; no public demo is linked yet.'
  },
  gatherly: {
    title: 'Gatherly',
    status: 'PERSONAL PROJECT · LOCAL BUILD',
    summary: 'A digital invitation and event-management platform that connects guest-facing invitations with event-day coordination.',
    role: 'Independent, end-to-end full-stack project',
    format: 'Web platform · local build',
    statusDetail: 'Not deployed to production',
    sections: [
      {
        label: 'PRODUCT SCOPE',
        title: 'Invitations and event operations in one place',
        intro: 'Gatherly covers the guest journey from receiving an invitation to checking in at an event, alongside tools for preparing the event experience.',
        points: [
          'Create customizable invitation pages with guest-specific links and RSVP.',
          'Manage guest lists, event schedules, and seating arrangements.',
          'Support event-day check-in with QR codes and usher screens.',
          'Add design, media, and gallery elements to event pages.'
        ]
      },
      {
        label: 'IMPLEMENTATION',
        title: 'Laravel backend with a React and Inertia frontend',
        intro: 'The local application combines Laravel 13 and PHP 8.3 with a React 19 and TypeScript interface connected through Inertia 3, styled with Tailwind CSS 4.',
        points: [
          'Laravel 13 and PHP 8.3 for the backend.',
          'React 19 and TypeScript for the interface.',
          'Inertia 3 connects the React pages to Laravel routes and data.',
          'Tailwind CSS 4 for styling; Vite handles frontend assets.'
        ]
      },
      {
        label: 'EVENT-DAY & ACCESS DECISIONS',
        title: 'Separate guest access from staff operations',
        intro: 'The platform links the invitation journey to event-day work while keeping guest pages, staff screens, and administrative actions scoped to their purpose.',
        points: [
          'Guest-specific invitation links support RSVP for the sessions available to that guest.',
          'QR check-in uses a canonical event link and prevents duplicate check-in for the same event.',
          'Usher accounts are limited to assigned events and check-in/welcome workflows; private RSVP notes stay off the welcome display.',
          'The local build does not activate live messaging or payment providers.'
        ]
      }
    ],
    stack: ['Laravel 13', 'PHP 8.3', 'React 19', 'TypeScript', 'Inertia 3', 'Tailwind CSS 4', 'Vite'],
    note: 'This is a local build, not a production deployment. Live messaging and payment providers are not enabled; no public demo or images are linked yet.'
  },
  'iot-healthcare': {
    title: 'IoT Healthcare Mobile Integration',
    status: 'PROFESSIONAL PROJECT · AUTHORIZED DATA INTEROPERABILITY · DETAILS GENERALIZED',
    summary: 'Authorized interoperability work to bring selected readings from supported healthcare device applications into an Android check-up workflow.',
    role: 'Reverse-engineering research and Android device/data integration',
    format: 'Android mobile app + Python/Flask backend',
    statusDetail: 'Authorized professional work · implementation details generalized',
    sections: [
      {
        label: 'PROBLEM & SCOPE',
        title: 'Bring supported measurement data into the check-up flow',
        intro: 'The work focused on investigating measurement data available through supported device applications and moving selected readings into the internal healthcare app.',
        points: [
          'Used Ghidra and ILSpy to investigate application data flows at a high level.',
          'Covered temperature, blood-pressure, pulse-oximetry, body-weight, and blood-glucose measurement categories.',
          'Connected supported readings with Android check-up workflows.'
        ]
      },
      {
        label: 'IMPLEMENTATION',
        title: 'Trace the data path and integrate the readings',
        intro: 'Application analysis complemented the Android app’s device-handling flow and the Python/Flask check-up backend.',
        points: [
          'Investigated how selected readings could move from supported device applications into the internal app.',
          'Integrated Android Java Bluetooth Low Energy service handling and measurement parsing for supported device flows.',
          'Connected mobile measurement workflows to backend APIs for check-up records.'
        ]
      },
      {
        label: 'ENGINEERING CHALLENGE',
        title: 'Keep readings attached to the right workflow',
        intro: 'The integration had to respect device-specific data handling while keeping each reading within the active check-up context.',
        points: [
          'Kept measurement flows aligned with the active check-up and backend record.',
          'Generalized the public case study: no manufacturer identities, app binaries, device identifiers, protocol details, internal endpoints, or patient information are included.'
        ]
      }
    ],
    stack: ['Ghidra', 'ILSpy', 'Android · Java', 'Bluetooth Low Energy', 'Python', 'Flask', 'REST APIs'],
    note: 'Authorized professional work. Manufacturer identities, app binaries, device addresses, BLE identifiers, proprietary protocol specifics, internal endpoints, and patient information are intentionally excluded.'
  },
  'hplc-data-interoperability': {
    title: 'HPLC Application Data Transfer',
    status: 'PROFESSIONAL PROJECT · REVERSE ENGINEERING · DETAILS GENERALIZED',
    summary: 'An authorized investigation into reading selected result data from an HPLC application and transferring it into an internal app.',
    role: 'Reverse-engineering research and data-interoperability contribution',
    format: 'Instrument application → internal application',
    statusDetail: 'Professional investigation · outcome details generalized',
    sections: [
      {
        label: 'SCOPE & OBJECTIVE',
        title: 'Assess a data handoff from the instrument application',
        intro: 'The goal was to understand selected result data exposed by the application and evaluate how it could be read into an internal workflow.',
        points: [
          'Used Ghidra and ILSpy to inspect application behavior at a high level.',
          'Focused on a permitted path to transfer selected result data into the internal app.',
          'This summary does not claim a production deployment or a confirmed end-to-end outcome.'
        ]
      },
      {
        label: 'PUBLIC DISCLOSURE',
        title: 'Keep the instrument and implementation details private',
        intro: 'The portfolio describes the interoperability objective without publishing reverse-engineering artifacts or instructions.',
        points: [
          'Manufacturer, model, firmware, application binaries, and operational data are omitted.',
          'Proprietary protocols, internal endpoints, and access-control details are not disclosed.'
        ]
      }
    ],
    stack: ['Ghidra', 'ILSpy', 'Application Analysis', 'Data Interoperability'],
    note: 'Authorized professional investigation. Instrument identity, model, firmware, application binaries, internal endpoints, proprietary protocol details, access-control specifics, and operational data are intentionally excluded.'
  },
  'office-attendance': {
    title: 'Office Attendance & Admin Portal',
    status: 'PROFESSIONAL PROJECT · DETAILS GENERALIZED',
    summary: 'An employee-facing attendance app and administrative portal for check-in/out, shift operations, attendance review, and reporting.',
    role: 'Project development across employee web app, admin frontend, and backend APIs',
    format: 'Next.js web apps + Python/Flask backend',
    statusDetail: 'Professional office system · internal details generalized',
    sections: [
      {
        label: 'EMPLOYEE WORKFLOW',
        title: 'Check in, check out, and review attendance history',
        intro: 'The employee-facing app brings attendance actions and personal records into a single web workflow, with site-policy checks kept separate from the public project description.',
        points: [
          'Support employee check-in and check-out.',
          'Show recent and monthly attendance history with search and pagination.',
          'Provide attendance reminders through browser push notifications.'
        ]
      },
      {
        label: 'ADMIN OPERATIONS',
        title: 'Give administrators tools for attendance and shift records',
        intro: 'The admin portal supports attendance review and the employee/shift operations needed to maintain office records.',
        points: [
          'Review attendance summaries and filter records by employee and date.',
          'Manage employee shift assignments and related schedules.',
          'Review attendance-device logs and export attendance reports.'
        ]
      },
      {
        label: 'IMPLEMENTATION',
        title: 'Separate employee and admin interfaces over shared APIs',
        intro: 'The system combines Next.js/React web frontends with a Python/Flask backend and MySQL-backed services.',
        points: [
          'Build employee and admin workflows as separate web applications.',
          'Use backend APIs for check-in/out, attendance history, summaries, employee records, and shift operations.',
          'Use a service worker and Web Push subscriptions for attendance reminders.',
          'Keep exact office-location/network rules, employee identifiers, internal endpoints, and camera imagery out of the public case study.'
        ]
      }
    ],
    stack: ['Next.js', 'React', 'Material UI', 'Python', 'Flask', 'MySQL', 'Web Push'],
    note: 'Professional project summary. Internal endpoint names, exact office location/network settings, employee records, and camera imagery are intentionally excluded.'
  },
  'school-information-system': {
    title: 'School Information System Concept',
    status: 'PRODUCT CONCEPT · PLANNING DRAFT',
    summary: 'A web-first education information system concept intended to serve multiple organizations and branches through one configurable product.',
    role: 'Product and system architecture planning · draft',
    format: 'School information system concept · web-first',
    statusDetail: 'Planning document only · implementation not started',
    sections: [
      {
        label: 'PRODUCT DIRECTION',
        title: 'Design for reuse across education organizations',
        intro: 'The planning draft describes a school information system intended to serve multiple education organizations. Support beyond branch-level operations remains a future requirement, not a delivered feature.',
        points: [
          'Planned scope includes student and teacher data, attendance, assignments and grades, tuition, announcements, and parent access.',
          'The intended direction is a configurable product rather than a separate application for every organization.',
          'The current folder contains planning documents, not implemented product screens or production code.'
        ]
      },
      {
        label: 'ARCHITECTURE DRAFT',
        title: 'Scope branch data and roles explicitly',
        intro: 'The current planning draft recommends shared data storage with branch-scoped records and row-level access controls.',
        points: [
          'The proposed model uses branch ownership and role permissions to separate branch operations.',
          'Central administration and branch-level roles are distinguished in the draft.',
          'The current plan is branch-focused; an organization/tenant layer, organization-level configuration, and cross-organization data isolation still need design and review.'
        ]
      },
      {
        label: 'PLANNED STACK & NEXT STEPS',
        title: 'Treat architecture and tenancy as proposals',
        intro: 'The draft proposes a web-first stack and explicitly waits for product-owner review before implementation begins.',
        points: [
          'Proposed frontend: Next.js, TypeScript, and React.',
          'Proposed backend/data stack: NestJS, PostgreSQL, and Prisma; row-level security is a design proposal.',
          'Before implementation, define the organization/tenant-versus-branch model, customization boundaries, and data-isolation requirements.'
        ]
      }
    ],
    stack: ['Next.js (proposed)', 'TypeScript', 'NestJS (planned)', 'PostgreSQL', 'Prisma', 'RBAC / RLS (proposed)'],
    note: 'Based on planning documents only. No production code has been written; the stack, organization/tenant model, and cross-organization isolation are not implemented.'
  },
  'laboratory-operations': {
    title: 'Laboratory Operations Systems',
    status: 'PROFESSIONAL PROJECT · DETAILS GENERALIZED',
    summary: 'An internal web system for configuring structured work templates, guiding laboratory and manufacturing procedures, and monitoring execution status.',
    role: 'Frontend workflow development within a team project',
    format: 'Next.js / React web application',
    statusDetail: 'Ongoing professional work · sensitive details generalized',
    sections: [
      {
        label: 'WORKFLOW CHALLENGE',
        title: 'Connect process setup to step-by-step execution',
        intro: 'Operators need a consistent way to prepare reusable process definitions, follow ordered instructions, and see where active work stands.',
        points: [
          'Bring template setup and run-time monitoring into related, but distinct, workflows.',
          'Represent detailed instructions across ordered steps and sub-steps instead of presenting a flat list.',
          'Keep operational settings, reference data, and equipment identifiers out of the public case study.'
        ]
      },
      {
        label: 'WORKFLOW DESIGN',
        title: 'Make queues and instruction progress easier to follow',
        intro: 'The monitoring interface groups work by its current state and presents instruction details in a structured flow.',
        points: [
          'Separate queued, ongoing, and paused work for day-to-day monitoring.',
          'Organize instructions by their process grouping and step order to support traceability.',
          'Connect service updates and live events to the monitoring views without exposing internal sensor or service identifiers.'
        ]
      },
      {
        label: 'IMPLEMENTATION',
        title: 'Use reusable web components around operational data',
        intro: 'The frontend combines form-driven template setup with monitoring views built on the existing application stack.',
        points: [
          'Build interfaces with Next.js, React, and Material UI.',
          'Integrate service data and Socket.IO updates for queue and monitoring workflows.',
          'Keep queue state and step-level progress visible within the monitoring workflow.'
        ]
      }
    ],
    stack: ['Next.js', 'React', 'Material UI', 'REST APIs', 'Socket.IO'],
    note: 'Professional internal work. Company names, exact process settings, production records, service endpoints, and equipment identifiers are intentionally omitted.'
  }
};

for (const item of companyProfiles) {
  caseStudies[item.slug] = {
    title: item.title,
    status: item.status,
    summary: item.description,
    role: item.role,
    format: item.format,
    statusDetail: 'Public website · Source repository private',
    sections: [
      {
        label: 'THE WEBSITE',
        title: 'What it helps visitors do',
        intro: item.description,
        points: item.items
      },
      {
        label: 'IMPLEMENTATION',
        title: 'How the site is structured',
        intro: item.implementation,
        points: [
          'Keep the site presentation focused on the organization and the questions visitors need answered.',
          'Make important contact and navigation paths easy to find.'
        ]
      }
    ],
    stack: item.stack,
    siteUrl: item.siteUrl,
    note: item.note
  };
}

const normalizeStackName = (name) =>
  String(name || '').replace(/\s*\([^)]*\)/g, '').trim().toLocaleLowerCase();

const getProjectGroup = (project) => {
  const status = String(project.status || '').toLocaleLowerCase();
  if (status.includes('personal project')) return 'personal';
  if (status.includes('professional project')) return 'professional';
  return 'concept';
};

const getRelatedProjects = (currentSlug, currentProject) => {
  const currentStack = new Set((currentProject.stack || []).map(normalizeStackName));

  return Object.entries(caseStudies)
    .filter(([slug]) => slug !== currentSlug)
    .map(([slug, project]) => {
      const sharedTools = Array.from(
        new Set(
          (project.stack || [])
            .map(normalizeStackName)
            .filter((tool) => tool && currentStack.has(tool)),
        ),
      );
      const sameGroup = getProjectGroup(project) === getProjectGroup(currentProject);

      return {
        slug,
        project,
        sharedTools,
        score: sharedTools.length * 2 + (sameGroup ? 1 : 0),
      };
    })
    .filter((item) => item.score > 0)
    .sort(
      (left, right) =>
        right.score - left.score || left.project.title.localeCompare(right.project.title),
    )
    .slice(0, 3);
};

export function ProjectCaseStudy({ slug, language='en', onLanguageChange, theme, onToggleTheme }) {
  const project = caseStudies[slug];
  const [copyStatus, setCopyStatus] = useState('');

  const handleCopyLink = async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(window.location.href);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('failed');
    }
  };

  useEffect(() => {
    if (!project) return undefined;
    setCopyStatus('');
    const previousTitle = document.title;
    document.title = `${project.title} — Case Study | Marcello Wijaya`;
    return () => {
      document.title = previousTitle;
    };
  }, [project]);

  if (!project) return null;

  const relatedProjects = getRelatedProjects(slug, project);

  return <div className="case-detail-shell">
    <a className="skip-link" href="#case-detail-main">{t("Skip to case study",language)}</a>
    <header className="header">
      <div className="shell case-detail-header">
        <a className="brand" href="/#home" aria-label="Marcello home"><BrandMark/></a>
        <div className="case-detail-header-actions"><div className="lang-switch" role="group" aria-label="Language / Bahasa">{["en","id"].map(code=><button key={code} type="button" lang={code} aria-label={code==="en"?"Switch to English":"Ganti ke Bahasa Indonesia"} aria-pressed={language===code} onClick={()=>onLanguageChange(code)}>{code.toUpperCase()}</button>)}</div>
          <a className="case-detail-back" href="/#work">{t("All projects",language)} <ArrowUpRight size={14} aria-hidden="true"/></a>
          <button type="button" className="theme-toggle" aria-label={t(theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme',language)} aria-pressed={theme === 'light'} onClick={onToggleTheme}>
            {theme === 'dark' ? <Sun size={16} aria-hidden="true"/> : <Moon size={16} aria-hidden="true"/>}
            <span>{t(theme === 'dark' ? 'Light' : 'Dark',language)}</span>
          </button>
        </div>
      </div>
    </header>
    <main id="case-detail-main">
      <article className="case-detail-page section shell">
        <div className="case-detail-kicker">
          <a href="/#work">← {t("Back to all projects",language)}</a>
          <span className="eyebrow">{t("PROJECT CASE STUDY",language)}</span>
        </div>
        <p className="case-detail-status">{t(project.status,language)}</p>
        <h1>{project.title}</h1>
        <p className="case-detail-summary">{t(project.summary,language)}</p>
        {project.siteUrl && <a className="case-detail-live-link" href={project.siteUrl} target="_blank" rel="noopener noreferrer">{t("Visit live company website",language)} <ArrowUpRight size={17} aria-hidden="true"/></a>}
        <div className="case-detail-meta">
          <div><span>{t("ROLE",language)}</span><strong>{t(project.role,language)}</strong></div>
          <div><span>{t("FORMAT",language)}</span><strong>{t(project.format,language)}</strong></div>
          <div><span>{t("STATUS",language)}</span><strong>{t(project.statusDetail,language)}</strong></div>
        </div>
        {project.sections.map(section => <section className="case-detail-section" key={section.label}>
          <p className="eyebrow">{t(section.label,language)}</p>
          <h2>{t(section.title,language)}</h2>
          <p className="case-detail-intro">{t(section.intro,language)}</p>
          <ul>{section.points.map(point => <li key={point}>{t(point,language)}</li>)}</ul>
        </section>)}
        <section className="case-detail-section">
          <p className="eyebrow">{t("TECH STACK",language)}</p>
          <h2>{t("Tools used",language)}</h2>
          <div className="case-detail-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
        </section>
        <p className="case-detail-note">{t(project.note,language)}</p>
        {relatedProjects.length > 0 && <section className="case-detail-related" aria-labelledby="related-case-studies-title">
          <p className="eyebrow">{t("KEEP EXPLORING",language)}</p>
          <h2 id="related-case-studies-title">{t("Related case studies",language)}</h2>
          <div className="related-case-study-grid">
            {relatedProjects.map(({ slug: relatedSlug, project: relatedProject }) => <a className="related-case-study-card" key={relatedSlug} href={'#case-study/' + relatedSlug} aria-label={`View case study: ${relatedProject.title}`}>
              <span className="related-case-study-status">{t(relatedProject.status,language)}</span>
              <h3>{relatedProject.title}</h3>
              <p>{t(relatedProject.summary,language)}</p>
              <span className="related-case-study-link">{t("View case study",language)} <ArrowUpRight size={14} aria-hidden="true"/></span>
            </a>)}
          </div>
        </section>}
        <div className="case-detail-footer">
          <a className="case-detail-back" href="/#work">← {t("Explore all projects",language)}</a>
          <button type="button" className="case-detail-share" aria-label={t("Copy case study link",language)} onClick={handleCopyLink}>
            {copyStatus === 'copied' ? <Check size={15} aria-hidden="true"/> : <Copy size={15} aria-hidden="true"/>}
            <span>{t(copyStatus === 'copied' ? 'Copied' : copyStatus === 'failed' ? 'Try again' : 'Copy link',language)}</span>
          </button>
          <span className="case-detail-copy-status" role="status" aria-live="polite">
            {t(copyStatus === 'copied' ? 'Link copied to clipboard.' : copyStatus === 'failed' ? 'Could not copy link. You can copy it from the address bar.' : '',language)}
          </span>
          <a className="case-detail-contact" href="/#contact">{t("Get in touch",language)} <ArrowUpRight size={16} aria-hidden="true"/></a>
        </div>
      </article>
    </main>
  </div>;
}
