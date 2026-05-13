import { type FormEvent, useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { siteContent } from '../content/siteContent';

type FormState = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
};

type PreparedRequest = {
  name: string;
  mailtoHref: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  company: '',
  projectType: siteContent.contact.projectTypes[0],
  message: '',
};

export function Contact() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [preparedRequest, setPreparedRequest] = useState<PreparedRequest | null>(null);
  const { contact } = siteContent;

  function createMailtoHref(request: FormState) {
    const subject = encodeURIComponent(`${contact.mailtoSubjectPrefix}: ${request.projectType}`);
    const body = encodeURIComponent(
      [
        `${contact.fieldLabels.name}: ${request.name}`,
        `${contact.fieldLabels.email}: ${request.email}`,
        `${contact.fieldLabels.company}: ${request.company}`,
        `${contact.fieldLabels.projectType}: ${request.projectType}`,
        '',
        request.message,
      ].join('\n'),
    );

    return `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }

  function updateField(field: keyof FormState, value: string) {
    setFormState((current) => ({ ...current, [field]: value }));
    setPreparedRequest(null);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = formState.name.trim();

    if (!name) {
      setPreparedRequest(null);
      return;
    }

    const preparedFormState = { ...formState, name };

    setPreparedRequest({
      name,
      mailtoHref: createMailtoHref(preparedFormState),
    });
  }

  return (
    <section className="page-section contact-section" id="contact">
      <div className="contact-copy">
        <p className="eyebrow">{contact.eyebrow}</p>
        <h2>{contact.title}</h2>
        <p>{contact.body}</p>
        <a className="mail-link" href={`mailto:${contact.email}`}>
          <Mail aria-hidden="true" size={18} />
          {contact.email}
        </a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          {contact.fieldLabels.name}
          <input
            required
            value={formState.name}
            onChange={(event) => updateField('name', event.target.value)}
            type="text"
            autoComplete="name"
          />
        </label>

        <label>
          {contact.fieldLabels.email}
          <input
            required
            value={formState.email}
            onChange={(event) => updateField('email', event.target.value)}
            type="email"
            autoComplete="email"
          />
        </label>

        <label>
          {contact.fieldLabels.company}
          <input
            required
            value={formState.company}
            onChange={(event) => updateField('company', event.target.value)}
            type="text"
            autoComplete="organization"
          />
        </label>

        <label>
          {contact.fieldLabels.projectType}
          <select
            required
            value={formState.projectType}
            onChange={(event) => updateField('projectType', event.target.value)}
          >
            {contact.projectTypes.map((projectType) => (
              <option key={projectType} value={projectType}>
                {projectType}
              </option>
            ))}
          </select>
        </label>

        <label className="full-field">
          {contact.fieldLabels.message}
          <textarea
            required
            value={formState.message}
            onChange={(event) => updateField('message', event.target.value)}
            rows={5}
          />
        </label>

        <button className="button button-primary full-field" type="submit">
          {contact.submitLabel}
          <Send aria-hidden="true" size={18} />
        </button>

        {preparedRequest ? (
          <div className="form-note full-field" role="status">
            <p>
              {contact.confirmationLead}, {preparedRequest.name}. {contact.confirmationMessage}
            </p>
            <a href={preparedRequest.mailtoHref}>{contact.confirmationLinkLabel}</a>
          </div>
        ) : (
          <p className="form-note full-field">{contact.defaultNote}</p>
        )}
      </form>
    </section>
  );
}
