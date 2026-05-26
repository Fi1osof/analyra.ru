import {
  AnalyzeWebPageAccessibilityFragment,
  ImpactValue,
} from 'src/gql/generated'

export const mockData: AnalyzeWebPageAccessibilityFragment = {
  inapplicable: [
    {
      id: 'accesskeys',
      impact: null,
      tags: ['cat.keyboard', 'best-practice'],
      description: 'Ensure every accesskey attribute value is unique',
      help: 'accesskey attribute value should be unique',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/accesskeys?application=playwright',
      nodes: [],
    },
    {
      id: 'area-alt',
      impact: null,
      tags: [
        'cat.text-alternatives',
        'wcag2a',
        'wcag244',
        'wcag412',
        'section508',
        'section508.22.a',
        'TTv5',
        'TT6.a',
        'EN-301-549',
        'EN-9.2.4.4',
        'EN-9.4.1.2',
        'ACT',
        'RGAAv4',
        'RGAA-1.1.2',
      ],
      description: 'Ensure <area> elements of image maps have alternative text',
      help: 'Active <area> elements must have alternative text',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/area-alt?application=playwright',
      nodes: [],
    },
    {
      id: 'aria-braille-equivalent',
      impact: null,
      tags: ['cat.aria', 'wcag2a', 'wcag412', 'EN-301-549', 'EN-9.4.1.2'],
      description:
        'Ensure aria-braillelabel and aria-brailleroledescription have a non-braille equivalent',
      help: 'aria-braille attributes must have a non-braille equivalent',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/aria-braille-equivalent?application=playwright',
      nodes: [],
    },
    {
      id: 'aria-command-name',
      impact: null,
      tags: [
        'cat.aria',
        'wcag2a',
        'wcag412',
        'TTv5',
        'TT6.a',
        'EN-301-549',
        'EN-9.4.1.2',
        'ACT',
        'RGAAv4',
        'RGAA-11.9.1',
      ],
      description:
        'Ensure every ARIA button, link and menuitem has an accessible name',
      help: 'ARIA commands must have an accessible name',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright',
      nodes: [],
    },
    {
      id: 'aria-dialog-name',
      impact: null,
      tags: ['cat.aria', 'best-practice'],
      description:
        'Ensure every ARIA dialog and alertdialog node has an accessible name',
      help: 'ARIA dialog and alertdialog nodes should have an accessible name',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright',
      nodes: [],
    },
    {
      id: 'aria-input-field-name',
      impact: null,
      tags: [
        'cat.aria',
        'wcag2a',
        'wcag412',
        'TTv5',
        'TT5.c',
        'EN-301-549',
        'EN-9.4.1.2',
        'ACT',
        'RGAAv4',
        'RGAA-11.1.1',
      ],
      description: 'Ensure every ARIA input field has an accessible name',
      help: 'ARIA input fields must have an accessible name',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=playwright',
      nodes: [],
    },
    {
      id: 'aria-meter-name',
      impact: null,
      tags: [
        'cat.aria',
        'wcag2a',
        'wcag111',
        'EN-301-549',
        'EN-9.1.1.1',
        'RGAAv4',
        'RGAA-11.1.1',
      ],
      description: 'Ensure every ARIA meter node has an accessible name',
      help: 'ARIA meter nodes must have an accessible name',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/aria-meter-name?application=playwright',
      nodes: [],
    },
    {
      id: 'aria-progressbar-name',
      impact: null,
      tags: [
        'cat.aria',
        'wcag2a',
        'wcag111',
        'EN-301-549',
        'EN-9.1.1.1',
        'RGAAv4',
        'RGAA-11.1.1',
      ],
      description: 'Ensure every ARIA progressbar node has an accessible name',
      help: 'ARIA progressbar nodes must have an accessible name',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/aria-progressbar-name?application=playwright',
      nodes: [],
    },
    {
      id: 'aria-required-children',
      impact: null,
      tags: [
        'cat.aria',
        'wcag2a',
        'wcag131',
        'EN-301-549',
        'EN-9.1.3.1',
        'RGAAv4',
        'RGAA-9.3.1',
      ],
      description:
        'Ensure elements with an ARIA role that require child roles contain them',
      help: 'Certain ARIA roles must contain particular children',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright',
      nodes: [],
    },
    {
      id: 'aria-required-parent',
      impact: null,
      tags: [
        'cat.aria',
        'wcag2a',
        'wcag131',
        'EN-301-549',
        'EN-9.1.3.1',
        'RGAAv4',
        'RGAA-9.3.1',
      ],
      description:
        'Ensure elements with an ARIA role that require parent roles are contained by them',
      help: 'Certain ARIA roles must be contained by particular parents',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/aria-required-parent?application=playwright',
      nodes: [],
    },
    {
      id: 'aria-text',
      impact: null,
      tags: ['cat.aria', 'best-practice'],
      description:
        'Ensure role="text" is used on elements with no focusable descendants',
      help: '"role=text" should have no focusable descendants',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/aria-text?application=playwright',
      nodes: [],
    },
    {
      id: 'aria-toggle-field-name',
      impact: null,
      tags: [
        'cat.aria',
        'wcag2a',
        'wcag412',
        'TTv5',
        'TT5.c',
        'EN-301-549',
        'EN-9.4.1.2',
        'ACT',
        'RGAAv4',
        'RGAA-7.1.1',
      ],
      description: 'Ensure every ARIA toggle field has an accessible name',
      help: 'ARIA toggle fields must have an accessible name',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/aria-toggle-field-name?application=playwright',
      nodes: [],
    },
    {
      id: 'aria-tooltip-name',
      impact: null,
      tags: ['cat.aria', 'wcag2a', 'wcag412', 'EN-301-549', 'EN-9.4.1.2'],
      description: 'Ensure every ARIA tooltip node has an accessible name',
      help: 'ARIA tooltip nodes must have an accessible name',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/aria-tooltip-name?application=playwright',
      nodes: [],
    },
    {
      id: 'aria-treeitem-name',
      impact: null,
      tags: ['cat.aria', 'best-practice'],
      description: 'Ensure every ARIA treeitem node has an accessible name',
      help: 'ARIA treeitem nodes should have an accessible name',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/aria-treeitem-name?application=playwright',
      nodes: [],
    },
    {
      id: 'autocomplete-valid',
      impact: null,
      tags: [
        'cat.forms',
        'wcag21aa',
        'wcag135',
        'EN-301-549',
        'EN-9.1.3.5',
        'ACT',
        'RGAAv4',
        'RGAA-11.13.1',
      ],
      description:
        'Ensure the autocomplete attribute is correct and suitable for the form field',
      help: 'autocomplete attribute must be used correctly',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/autocomplete-valid?application=playwright',
      nodes: [],
    },
    {
      id: 'blink',
      impact: null,
      tags: [
        'cat.time-and-media',
        'wcag2a',
        'wcag222',
        'section508',
        'section508.22.j',
        'TTv5',
        'TT2.b',
        'EN-301-549',
        'EN-9.2.2.2',
        'RGAAv4',
        'RGAA-13.8.1',
      ],
      description: 'Ensure <blink> elements are not used',
      help: '<blink> elements are deprecated and must not be used',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/blink?application=playwright',
      nodes: [],
    },
    {
      id: 'definition-list',
      impact: null,
      tags: [
        'cat.structure',
        'wcag2a',
        'wcag131',
        'EN-301-549',
        'EN-9.1.3.1',
        'RGAAv4',
        'RGAA-9.3.3',
      ],
      description: 'Ensure <dl> elements are structured correctly',
      help: '<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/definition-list?application=playwright',
      nodes: [],
    },
    {
      id: 'dlitem',
      impact: null,
      tags: [
        'cat.structure',
        'wcag2a',
        'wcag131',
        'EN-301-549',
        'EN-9.1.3.1',
        'RGAAv4',
        'RGAA-9.3.3',
      ],
      description: 'Ensure <dt> and <dd> elements are contained by a <dl>',
      help: '<dt> and <dd> elements must be contained by a <dl>',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/dlitem?application=playwright',
      nodes: [],
    },
    {
      id: 'empty-table-header',
      impact: null,
      tags: ['cat.name-role-value', 'best-practice'],
      description: 'Ensure table headers have discernible text',
      help: 'Table header text should not be empty',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright',
      nodes: [],
    },
    {
      id: 'form-field-multiple-labels',
      impact: null,
      tags: [
        'cat.forms',
        'wcag2a',
        'wcag332',
        'TTv5',
        'TT5.c',
        'EN-301-549',
        'EN-9.3.3.2',
        'RGAAv4',
        'RGAA-11.2.1',
      ],
      description: 'Ensure form field does not have multiple label elements',
      help: 'Form field must not have multiple label elements',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/form-field-multiple-labels?application=playwright',
      nodes: [],
    },
    {
      id: 'frame-focusable-content',
      impact: null,
      tags: [
        'cat.keyboard',
        'wcag2a',
        'wcag211',
        'TTv5',
        'TT4.a',
        'EN-301-549',
        'EN-9.2.1.1',
        'RGAAv4',
        'RGAA-7.3.2',
      ],
      description:
        'Ensure <frame> and <iframe> elements with focusable content do not have tabindex=-1',
      help: 'Frames with focusable content must not have tabindex=-1',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/frame-focusable-content?application=playwright',
      nodes: [],
    },
    {
      id: 'frame-tested',
      impact: null,
      tags: ['cat.structure', 'best-practice', 'review-item'],
      description:
        'Ensure <iframe> and <frame> elements contain the axe-core script',
      help: 'Frames should be tested with axe-core',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/frame-tested?application=playwright',
      nodes: [],
    },
    {
      id: 'frame-title-unique',
      impact: null,
      tags: [
        'cat.text-alternatives',
        'wcag2a',
        'wcag412',
        'TTv5',
        'TT12.d',
        'EN-301-549',
        'EN-9.4.1.2',
        'RGAAv4',
        'RGAA-2.2.1',
      ],
      description:
        'Ensure <iframe> and <frame> elements contain a unique title attribute',
      help: 'Frames must have a unique title attribute',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/frame-title-unique?application=playwright',
      nodes: [],
    },
    {
      id: 'frame-title',
      impact: null,
      tags: [
        'cat.text-alternatives',
        'wcag2a',
        'wcag412',
        'section508',
        'section508.22.i',
        'TTv5',
        'TT12.d',
        'EN-301-549',
        'EN-9.4.1.2',
        'RGAAv4',
        'RGAA-2.1.1',
      ],
      description:
        'Ensure <iframe> and <frame> elements have an accessible name',
      help: 'Frames must have an accessible name',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright',
      nodes: [],
    },
    {
      id: 'html-lang-valid',
      impact: null,
      tags: [
        'cat.language',
        'wcag2a',
        'wcag311',
        'TTv5',
        'TT11.a',
        'EN-301-549',
        'EN-9.3.1.1',
        'ACT',
        'RGAAv4',
        'RGAA-8.4.1',
      ],
      description:
        'Ensure the lang attribute of the <html> element has a valid value',
      help: '<html> element must have a valid value for the lang attribute',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/html-lang-valid?application=playwright',
      nodes: [],
    },
    {
      id: 'html-xml-lang-mismatch',
      impact: null,
      tags: [
        'cat.language',
        'wcag2a',
        'wcag311',
        'EN-301-549',
        'EN-9.3.1.1',
        'ACT',
        'RGAAv4',
        'RGAA-8.3.1',
      ],
      description:
        'Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page',
      help: 'HTML elements with lang and xml:lang must have the same base language',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/html-xml-lang-mismatch?application=playwright',
      nodes: [],
    },
    {
      id: 'input-button-name',
      impact: null,
      tags: [
        'cat.name-role-value',
        'wcag2a',
        'wcag412',
        'section508',
        'section508.22.a',
        'TTv5',
        'TT5.c',
        'EN-301-549',
        'EN-9.4.1.2',
        'ACT',
        'RGAAv4',
        'RGAA-11.9.1',
      ],
      description: 'Ensure input buttons have discernible text',
      help: 'Input buttons must have discernible text',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/input-button-name?application=playwright',
      nodes: [],
    },
    {
      id: 'input-image-alt',
      impact: null,
      tags: [
        'cat.text-alternatives',
        'wcag2a',
        'wcag111',
        'wcag412',
        'section508',
        'section508.22.a',
        'TTv5',
        'TT7.a',
        'EN-301-549',
        'EN-9.1.1.1',
        'EN-9.4.1.2',
        'ACT',
        'RGAAv4',
        'RGAA-1.1.3',
      ],
      description: 'Ensure <input type="image"> elements have alternative text',
      help: 'Image buttons must have alternative text',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/input-image-alt?application=playwright',
      nodes: [],
    },
    {
      id: 'label-title-only',
      impact: null,
      tags: ['cat.forms', 'best-practice'],
      description:
        'Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes',
      help: 'Form elements should have a visible label',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright',
      nodes: [],
    },
    {
      id: 'label',
      impact: null,
      tags: [
        'cat.forms',
        'wcag2a',
        'wcag412',
        'section508',
        'section508.22.n',
        'TTv5',
        'TT5.c',
        'EN-301-549',
        'EN-9.4.1.2',
        'ACT',
        'RGAAv4',
        'RGAA-11.1.1',
      ],
      description: 'Ensure every form element has a label',
      help: 'Form elements must have labels',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/label?application=playwright',
      nodes: [],
    },
    {
      id: 'landmark-complementary-is-top-level',
      impact: null,
      tags: ['cat.semantics', 'best-practice'],
      description: 'Ensure the complementary landmark or aside is at top level',
      help: 'Aside should not be contained in another landmark',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/landmark-complementary-is-top-level?application=playwright',
      nodes: [],
    },
    {
      id: 'landmark-main-is-top-level',
      impact: null,
      tags: ['cat.semantics', 'best-practice'],
      description: 'Ensure the main landmark is at top level',
      help: 'Main landmark should not be contained in another landmark',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/landmark-main-is-top-level?application=playwright',
      nodes: [],
    },
    {
      id: 'landmark-no-duplicate-main',
      impact: null,
      tags: ['cat.semantics', 'best-practice'],
      description: 'Ensure the document has at most one main landmark',
      help: 'Document should not have more than one main landmark',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-main?application=playwright',
      nodes: [],
    },
    {
      id: 'link-in-text-block',
      impact: null,
      tags: [
        'cat.color',
        'wcag2a',
        'wcag141',
        'TTv5',
        'TT13.a',
        'EN-301-549',
        'EN-9.1.4.1',
        'RGAAv4',
        'RGAA-10.6.1',
      ],
      description:
        'Ensure links are distinguished from surrounding text in a way that does not rely on color',
      help: 'Links must be distinguishable without relying on color',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright',
      nodes: [],
    },
    {
      id: 'marquee',
      impact: null,
      tags: [
        'cat.parsing',
        'wcag2a',
        'wcag222',
        'TTv5',
        'TT2.b',
        'EN-301-549',
        'EN-9.2.2.2',
        'RGAAv4',
        'RGAA-13.8.1',
      ],
      description: 'Ensure <marquee> elements are not used',
      help: '<marquee> elements are deprecated and must not be used',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/marquee?application=playwright',
      nodes: [],
    },
    {
      id: 'meta-refresh',
      impact: null,
      tags: [
        'cat.time-and-media',
        'wcag2a',
        'wcag221',
        'TTv5',
        'TT8.a',
        'EN-301-549',
        'EN-9.2.2.1',
        'RGAAv4',
        'RGAA-13.1.2',
      ],
      description:
        'Ensure <meta http-equiv="refresh"> is not used for delayed refresh',
      help: 'Delayed refresh under 20 hours must not be used',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright',
      nodes: [],
    },
    {
      id: 'object-alt',
      impact: null,
      tags: [
        'cat.text-alternatives',
        'wcag2a',
        'wcag111',
        'section508',
        'section508.22.a',
        'EN-301-549',
        'EN-9.1.1.1',
        'RGAAv4',
        'RGAA-1.1.6',
      ],
      description: 'Ensure <object> elements have alternative text',
      help: '<object> elements must have alternative text',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/object-alt?application=playwright',
      nodes: [],
    },
    {
      id: 'presentation-role-conflict',
      impact: null,
      tags: ['cat.aria', 'best-practice', 'ACT'],
      description:
        'Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them',
      help: 'Elements marked as presentational should be consistently ignored',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/presentation-role-conflict?application=playwright',
      nodes: [],
    },
    {
      id: 'role-img-alt',
      impact: null,
      tags: [
        'cat.text-alternatives',
        'wcag2a',
        'wcag111',
        'section508',
        'section508.22.a',
        'TTv5',
        'TT7.a',
        'EN-301-549',
        'EN-9.1.1.1',
        'ACT',
        'RGAAv4',
        'RGAA-1.1.1',
      ],
      description: 'Ensure [role="img"] elements have alternative text',
      help: '[role="img"] elements must have alternative text',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/role-img-alt?application=playwright',
      nodes: [],
    },
    {
      id: 'scope-attr-valid',
      impact: null,
      tags: ['cat.tables', 'best-practice'],
      description: 'Ensure the scope attribute is used correctly on tables',
      help: 'scope attribute should be used correctly',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/scope-attr-valid?application=playwright',
      nodes: [],
    },
    {
      id: 'scrollable-region-focusable',
      impact: null,
      tags: [
        'cat.keyboard',
        'wcag2a',
        'wcag211',
        'wcag213',
        'TTv5',
        'TT4.a',
        'EN-301-549',
        'EN-9.2.1.1',
        'EN-9.2.1.3',
        'RGAAv4',
        'RGAA-7.3.2',
      ],
      description:
        'Ensure elements that have scrollable content are accessible by keyboard in Safari',
      help: 'Scrollable region must have keyboard access',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/scrollable-region-focusable?application=playwright',
      nodes: [],
    },
    {
      id: 'select-name',
      impact: null,
      tags: [
        'cat.forms',
        'wcag2a',
        'wcag412',
        'section508',
        'section508.22.n',
        'TTv5',
        'TT5.c',
        'EN-301-549',
        'EN-9.4.1.2',
        'ACT',
        'RGAAv4',
        'RGAA-11.1.1',
      ],
      description: 'Ensure select element has an accessible name',
      help: 'Select element must have an accessible name',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright',
      nodes: [],
    },
    {
      id: 'server-side-image-map',
      impact: null,
      tags: [
        'cat.text-alternatives',
        'wcag2a',
        'wcag211',
        'section508',
        'section508.22.f',
        'TTv5',
        'TT4.a',
        'EN-301-549',
        'EN-9.2.1.1',
        'RGAAv4',
        'RGAA-1.1.4',
      ],
      description: 'Ensure that server-side image maps are not used',
      help: 'Server-side image maps must not be used',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/server-side-image-map?application=playwright',
      nodes: [],
    },
    {
      id: 'skip-link',
      impact: null,
      tags: ['cat.keyboard', 'best-practice', 'RGAAv4', 'RGAA-12.7.1'],
      description: 'Ensure all skip links have a focusable target',
      help: 'The skip-link target should exist and be focusable',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/skip-link?application=playwright',
      nodes: [],
    },
    {
      id: 'summary-name',
      impact: null,
      tags: [
        'cat.name-role-value',
        'wcag2a',
        'wcag412',
        'section508',
        'section508.22.a',
        'TTv5',
        'TT6.a',
        'EN-301-549',
        'EN-9.4.1.2',
      ],
      description: 'Ensure summary elements have discernible text',
      help: 'Summary elements must have discernible text',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/summary-name?application=playwright',
      nodes: [],
    },
    {
      id: 'svg-img-alt',
      impact: null,
      tags: [
        'cat.text-alternatives',
        'wcag2a',
        'wcag111',
        'section508',
        'section508.22.a',
        'TTv5',
        'TT7.a',
        'EN-301-549',
        'EN-9.1.1.1',
        'ACT',
        'RGAAv4',
        'RGAA-1.1.5',
      ],
      description:
        'Ensure <svg> elements with an img, graphics-document or graphics-symbol role have accessible text',
      help: '<svg> elements with an img role must have alternative text',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright',
      nodes: [],
    },
    {
      id: 'tabindex',
      impact: null,
      tags: ['cat.keyboard', 'best-practice'],
      description: 'Ensure tabindex attribute values are not greater than 0',
      help: 'Elements should not have tabindex greater than zero',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright',
      nodes: [],
    },
    {
      id: 'table-duplicate-name',
      impact: null,
      tags: ['cat.tables', 'best-practice', 'RGAAv4', 'RGAA-5.2.1'],
      description:
        'Ensure the <caption> element does not contain the same text as the summary attribute',
      help: 'Tables should not have the same summary and caption',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/table-duplicate-name?application=playwright',
      nodes: [],
    },
    {
      id: 'td-headers-attr',
      impact: null,
      tags: [
        'cat.tables',
        'wcag2a',
        'wcag131',
        'section508',
        'section508.22.g',
        'TTv5',
        'TT14.b',
        'EN-301-549',
        'EN-9.1.3.1',
        'RGAAv4',
        'RGAA-5.7.4',
      ],
      description:
        'Ensure that each cell in a table that uses the headers attribute refers only to other <th> elements in that table',
      help: 'Table cell headers attributes must refer to other <th> elements in the same table',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/td-headers-attr?application=playwright',
      nodes: [],
    },
    {
      id: 'th-has-data-cells',
      impact: null,
      tags: [
        'cat.tables',
        'wcag2a',
        'wcag131',
        'section508',
        'section508.22.g',
        'TTv5',
        'TT14.b',
        'EN-301-549',
        'EN-9.1.3.1',
        'RGAAv4',
        'RGAA-5.7.1',
      ],
      description:
        'Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe',
      help: 'Table headers in a data table must refer to data cells',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/th-has-data-cells?application=playwright',
      nodes: [],
    },
    {
      id: 'valid-lang',
      impact: null,
      tags: [
        'cat.language',
        'wcag2aa',
        'wcag312',
        'TTv5',
        'TT11.b',
        'EN-301-549',
        'EN-9.3.1.2',
        'ACT',
        'RGAAv4',
        'RGAA-8.8.1',
      ],
      description: 'Ensure lang attributes have valid values',
      help: 'lang attribute must have a valid value',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/valid-lang?application=playwright',
      nodes: [],
    },
    {
      id: 'video-caption',
      impact: null,
      tags: [
        'cat.text-alternatives',
        'wcag2a',
        'wcag122',
        'section508',
        'section508.22.a',
        'TTv5',
        'TT17.a',
        'EN-301-549',
        'EN-9.1.2.2',
        'RGAAv4',
        'RGAA-4.3.1',
      ],
      description: 'Ensure <video> elements have captions',
      help: '<video> elements must have captions',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/video-caption?application=playwright',
      nodes: [],
    },
    {
      id: 'no-autoplay-audio',
      impact: null,
      tags: [
        'cat.time-and-media',
        'wcag2a',
        'wcag142',
        'TTv5',
        'TT2.a',
        'EN-301-549',
        'EN-9.1.4.2',
        'ACT',
        'RGAAv4',
        'RGAA-4.10.1',
      ],
      description:
        'Ensure <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio',
      help: '<video> or <audio> elements must not play automatically',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/no-autoplay-audio?application=playwright',
      nodes: [],
    },
  ],
  incomplete: [
    {
      id: 'color-contrast',
      impact: ImpactValue.SERIOUS,
      tags: [
        'cat.color',
        'wcag2aa',
        'wcag143',
        'TTv5',
        'TT13.c',
        'EN-301-549',
        'EN-9.1.4.3',
        'ACT',
        'RGAAv4',
        'RGAA-3.2.1',
      ],
      description:
        'Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds',
      help: 'Elements must meet minimum color contrast ratio thresholds',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                contrastRatio: 0,
                fontSize: '9.8pt (13px)',
                fontWeight: 'normal',
                messageKey: 'bgOverlap',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                "Element's background color could not be determined because it is overlapped by another element",
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<span class="sc-55ce9742-9 gVNGiD">AI R&amp;D Lab · Execution Network</span>',
          target: ['.sc-55ce9742-9'],
          failureSummary:
            "Fix any of the following:\n  Element's background color could not be determined because it is overlapped by another element",
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                contrastRatio: 0,
                fontSize: '63.0pt (84px)',
                fontWeight: 'normal',
                messageKey: 'bgOverlap',
                expectedContrastRatio: '3:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                "Element's background color could not be determined because it is overlapped by another element",
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<h1 class="sc-55ce9742-10 frjUjB">An AI R&amp;D Lab That <em>Actually</em> Delivers</h1>',
          target: ['.sc-55ce9742-7 > div:nth-child(1) > h1'],
          failureSummary:
            "Fix any of the following:\n  Element's background color could not be determined because it is overlapped by another element",
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                contrastRatio: 0,
                fontSize: '63.0pt (84px)',
                fontWeight: 'normal',
                messageKey: 'bgOverlap',
                expectedContrastRatio: '3:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                "Element's background color could not be determined because it is overlapped by another element",
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<em>Actually</em>',
          target: ['em'],
          failureSummary:
            "Fix any of the following:\n  Element's background color could not be determined because it is overlapped by another element",
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                contrastRatio: 0,
                fontSize: '14.3pt (19px)',
                fontWeight: 'normal',
                messageKey: 'bgOverlap',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                "Element's background color could not be determined because it is overlapped by another element",
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<p class="sc-55ce9742-11 iuYqNI">We cut through AI chaos, define the right solutions, and execute them with Link distributed network of verified professionals.</p>',
          target: [
            '.sc-55ce9742-7 > div:nth-child(1) > .sc-55ce9742-11.iuYqNI',
          ],
          failureSummary:
            "Fix any of the following:\n  Element's background color could not be determined because it is overlapped by another element",
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                contrastRatio: 0,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                messageKey: 'bgOverlap',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                "Element's background color could not be determined because it is overlapped by another element",
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<p class="sc-55ce9742-12 kggOaz">Not Link freelance marketplace. A coordinated team with shared responsibility for real outcomes.</p>',
          target: ['.sc-55ce9742-12'],
          failureSummary:
            "Fix any of the following:\n  Element's background color could not be determined because it is overlapped by another element",
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                contrastRatio: 0,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                messageKey: 'bgOverlap',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                "Element's background color could not be determined because it is overlapped by another element",
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<button class="sc-55ce9742-14 kqsRLa">Get Access →</button>',
          target: [
            '.sc-55ce9742-7 > .sc-55ce9742-13.fXwvkL > .sc-977eafde-0.gwtsdv > .sc-55ce9742-14.kqsRLa',
          ],
          failureSummary:
            "Fix any of the following:\n  Element's background color could not be determined because it is overlapped by another element",
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                contrastRatio: 0,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                messageKey: 'bgOverlap',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                "Element's background color could not be determined because it is overlapped by another element",
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<a class="sc-55ce9742-15 kWbzHd" href="https://t.me/freecode_academy">Join Telegram Channel</a>',
          target: [
            '.sc-55ce9742-7 > .sc-55ce9742-13.fXwvkL > .sc-55ce9742-15.kWbzHd[href$="freecode_academy"]',
          ],
          failureSummary:
            "Fix any of the following:\n  Element's background color could not be determined because it is overlapped by another element",
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                messageKey: 'nonBmp',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element content contains only non-text characters',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<div class="sc-55ce9742-28 cvFudy">✓</div>',
          target: ['article:nth-child(2) > .sc-55ce9742-28.cvFudy'],
          failureSummary:
            'Fix any of the following:\n  Element content contains only non-text characters',
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                messageKey: 'nonBmp',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element content contains only non-text characters',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<div class="sc-55ce9742-28 cvFudy">◎</div>',
          target: ['article:nth-child(4) > .sc-55ce9742-28.cvFudy'],
          failureSummary:
            'Fix any of the following:\n  Element content contains only non-text characters',
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                contrastRatio: 0,
                fontSize: '9.8pt (13px)',
                fontWeight: 'normal',
                messageKey: 'bgGradient',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [
                {
                  html: '<div class="sc-38ad1aac-15 uiPEk">',
                  target: ['.sc-38ad1aac-15'],
                },
              ],
              impact: ImpactValue.SERIOUS,
              message:
                "Element's background color could not be determined due to a background gradient",
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<div style="color:#FF7E55" class="sc-55ce9742-19 hUPeLP">AI Lab</div>',
          target: [
            '.sc-38ad1aac-15 > div:nth-child(1) > .sc-55ce9742-19.hUPeLP',
          ],
          failureSummary:
            "Fix any of the following:\n  Element's background color could not be determined due to a background gradient",
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                contrastRatio: 0,
                fontSize: '40.5pt (54px)',
                fontWeight: 'normal',
                messageKey: 'bgGradient',
                expectedContrastRatio: '3:1',
              },
              relatedNodes: [
                {
                  html: '<div class="sc-38ad1aac-15 uiPEk">',
                  target: ['.sc-38ad1aac-15'],
                },
              ],
              impact: ImpactValue.SERIOUS,
              message:
                "Element's background color could not be determined due to a background gradient",
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<h2 class="sc-55ce9742-20 lloRzV">A Public AI Lab + Private Execution Network</h2>',
          target: ['.sc-38ad1aac-15 > div:nth-child(1) > h2'],
          failureSummary:
            "Fix any of the following:\n  Element's background color could not be determined due to a background gradient",
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                contrastRatio: 0,
                fontSize: '12.8pt (17px)',
                fontWeight: 'normal',
                messageKey: 'bgGradient',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [
                {
                  html: '<div class="sc-38ad1aac-15 uiPEk">',
                  target: ['.sc-38ad1aac-15'],
                },
              ],
              impact: ImpactValue.SERIOUS,
              message:
                "Element's background color could not be determined due to a background gradient",
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<p>We continuously research and publish insights on modern AI and technology. But we don’t stop at theory — we turn research into real-world execution.</p>',
          target: ['.sc-38ad1aac-15 > div:nth-child(1) > p'],
          failureSummary:
            "Fix any of the following:\n  Element's background color could not be determined due to a background gradient",
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                contrastRatio: 0,
                fontSize: '12.0pt (16px)',
                fontWeight: 'normal',
                messageKey: 'bgGradient',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [
                {
                  html: '<div class="sc-38ad1aac-15 uiPEk">',
                  target: ['.sc-38ad1aac-15'],
                },
              ],
              impact: ImpactValue.SERIOUS,
              message:
                "Element's background color could not be determined due to a background gradient",
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<li>experiments → prototypes</li>',
          target: ['.sc-38ad1aac-16 > li:nth-child(1)'],
          failureSummary:
            "Fix any of the following:\n  Element's background color could not be determined due to a background gradient",
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                contrastRatio: 0,
                fontSize: '12.0pt (16px)',
                fontWeight: 'normal',
                messageKey: 'bgGradient',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [
                {
                  html: '<div class="sc-38ad1aac-15 uiPEk">',
                  target: ['.sc-38ad1aac-15'],
                },
              ],
              impact: ImpactValue.SERIOUS,
              message:
                "Element's background color could not be determined due to a background gradient",
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<li>prototypes → products</li>',
          target: ['.sc-38ad1aac-16 > li:nth-child(2)'],
          failureSummary:
            "Fix any of the following:\n  Element's background color could not be determined due to a background gradient",
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                contrastRatio: 0,
                fontSize: '12.0pt (16px)',
                fontWeight: 'normal',
                messageKey: 'bgGradient',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [
                {
                  html: '<div class="sc-38ad1aac-15 uiPEk">',
                  target: ['.sc-38ad1aac-15'],
                },
              ],
              impact: ImpactValue.SERIOUS,
              message:
                "Element's background color could not be determined due to a background gradient",
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<li>ideas → working systems</li>',
          target: ['.sc-38ad1aac-16 > li:nth-child(3)'],
          failureSummary:
            "Fix any of the following:\n  Element's background color could not be determined due to a background gradient",
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                messageKey: 'nonBmp',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element content contains only non-text characters',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<span style="color:#FF5B2E;margin-right:10px">✓</span>',
          target: ['li:nth-child(1) > span'],
          failureSummary:
            'Fix any of the following:\n  Element content contains only non-text characters',
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                messageKey: 'nonBmp',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element content contains only non-text characters',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<span style="color:#FF5B2E;margin-right:10px">✓</span>',
          target: ['li:nth-child(2) > span'],
          failureSummary:
            'Fix any of the following:\n  Element content contains only non-text characters',
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                messageKey: 'nonBmp',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element content contains only non-text characters',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<span style="color:#FF5B2E;margin-right:10px">✓</span>',
          target: ['li:nth-child(3) > span'],
          failureSummary:
            'Fix any of the following:\n  Element content contains only non-text characters',
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                contrastRatio: 0,
                fontSize: '9.8pt (13px)',
                fontWeight: 'normal',
                messageKey: 'bgGradient',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [
                {
                  html: '<section id="cta" class="sc-38ad1aac-25 eOYlOT">',
                  target: ['#cta'],
                },
              ],
              impact: ImpactValue.SERIOUS,
              message:
                "Element's background color could not be determined due to a background gradient",
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<div class="sc-55ce9742-19 hUPeLP">Ready to Join?</div>',
          target: ['.sc-55ce9742-0.jOoHfR > .sc-55ce9742-19.hUPeLP'],
          failureSummary:
            "Fix any of the following:\n  Element's background color could not be determined due to a background gradient",
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                contrastRatio: 0,
                fontSize: '48.0pt (64px)',
                fontWeight: 'normal',
                messageKey: 'bgGradient',
                expectedContrastRatio: '3:1',
              },
              relatedNodes: [
                {
                  html: '<section id="cta" class="sc-38ad1aac-25 eOYlOT">',
                  target: ['#cta'],
                },
              ],
              impact: ImpactValue.SERIOUS,
              message:
                "Element's background color could not be determined due to a background gradient",
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<h1 style="font-size:clamp(36px, 5vw, 64px);max-width:16ch" class="sc-55ce9742-10 frjUjB">A new kind of professional network.</h1>',
          target: ['.sc-55ce9742-0.jOoHfR > h1'],
          failureSummary:
            "Fix any of the following:\n  Element's background color could not be determined due to a background gradient",
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                contrastRatio: 0,
                fontSize: '14.3pt (19px)',
                fontWeight: 'normal',
                messageKey: 'bgGradient',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [
                {
                  html: '<section id="cta" class="sc-38ad1aac-25 eOYlOT">',
                  target: ['#cta'],
                },
              ],
              impact: ImpactValue.SERIOUS,
              message:
                "Element's background color could not be determined due to a background gradient",
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<p class="sc-55ce9742-11 iuYqNI">Work on real projects. Collaborate with trusted professionals. Be part of Link system that actually delivers.</p>',
          target: ['.sc-55ce9742-0.jOoHfR > .sc-55ce9742-11.iuYqNI'],
          failureSummary:
            "Fix any of the following:\n  Element's background color could not be determined due to a background gradient",
        },
      ],
    },
  ],
  passes: [
    {
      id: 'aria-allowed-attr',
      impact: null,
      tags: [
        'cat.aria',
        'wcag2a',
        'wcag412',
        'EN-301-549',
        'EN-9.4.1.2',
        'RGAAv4',
        'RGAA-7.1.1',
      ],
      description: "Ensure an element's role supports its ARIA attributes",
      help: 'Elements must only use supported ARIA attributes',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright',
      nodes: [
        {
          any: [],
          all: [
            {
              id: 'aria-allowed-attr',
              data: null,
              relatedNodes: [],
              impact: 'critical',
              message:
                'ARIA attributes are used correctly for the defined role',
            },
            {
              id: 'aria-allowed-attr-elm',
              data: null,
              relatedNodes: [],
              message: 'ARIA attributes are allowed for this element',
              impact: 'critical',
            },
          ],
          none: [
            {
              id: 'aria-unsupported-attr',
              data: null,
              relatedNodes: [],
              impact: 'critical',
              message: 'ARIA attribute is supported',
            },
          ],
          impact: null,
          html: '<p aria-live="assertive" id="__next-route-announcer__" role="alert" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 1px; white-space: nowrap; overflow-wrap: normal;"></p>',
          target: ['#__next-route-announcer__'],
        },
      ],
    },
    {
      id: 'aria-allowed-role',
      impact: null,
      tags: ['cat.aria', 'best-practice'],
      description:
        'Ensure role attribute has an appropriate value for the element',
      help: 'ARIA role should be appropriate for the element',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'aria-allowed-role',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'ARIA role is allowed for given element',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p aria-live="assertive" id="__next-route-announcer__" role="alert" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 1px; white-space: nowrap; overflow-wrap: normal;"></p>',
          target: ['#__next-route-announcer__'],
        },
      ],
    },
    {
      id: 'aria-conditional-attr',
      impact: null,
      tags: [
        'cat.aria',
        'wcag2a',
        'wcag412',
        'EN-301-549',
        'EN-9.4.1.2',
        'RGAAv4',
        'RGAA-7.1.1',
      ],
      description:
        "Ensure ARIA attributes are used as described in the specification of the element's role",
      help: "ARIA attributes must be used as specified for the element's role",
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/aria-conditional-attr?application=playwright',
      nodes: [
        {
          any: [],
          all: [
            {
              id: 'aria-conditional-attr',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'ARIA attribute is allowed',
            },
          ],
          none: [],
          impact: null,
          html: '<p aria-live="assertive" id="__next-route-announcer__" role="alert" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 1px; white-space: nowrap; overflow-wrap: normal;"></p>',
          target: ['#__next-route-announcer__'],
        },
      ],
    },
    {
      id: 'aria-deprecated-role',
      impact: null,
      tags: [
        'cat.aria',
        'wcag2a',
        'wcag412',
        'EN-301-549',
        'EN-9.4.1.2',
        'RGAAv4',
        'RGAA-7.1.1',
      ],
      description: 'Ensure elements do not use deprecated roles',
      help: 'Deprecated ARIA roles must not be used',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/aria-deprecated-role?application=playwright',
      nodes: [
        {
          any: [],
          all: [],
          none: [
            {
              id: 'deprecatedrole',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'ARIA role is not deprecated',
            },
          ],
          impact: null,
          html: '<p aria-live="assertive" id="__next-route-announcer__" role="alert" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 1px; white-space: nowrap; overflow-wrap: normal;"></p>',
          target: ['#__next-route-announcer__'],
        },
      ],
    },
    {
      id: 'aria-hidden-body',
      impact: null,
      tags: [
        'cat.aria',
        'wcag2a',
        'wcag131',
        'wcag412',
        'EN-301-549',
        'EN-9.1.3.1',
        'EN-9.4.1.2',
        'RGAAv4',
        'RGAA-10.8.1',
      ],
      description:
        'Ensure aria-hidden="true" is not present on the document body.',
      help: 'aria-hidden="true" must not be present on the document body',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/aria-hidden-body?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'aria-hidden-body',
              data: null,
              relatedNodes: [],
              impact: 'critical',
              message: 'No aria-hidden attribute is present on document body',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<body>',
          target: ['body'],
        },
      ],
    },
    {
      id: 'aria-hidden-focus',
      impact: null,
      tags: [
        'cat.name-role-value',
        'wcag2a',
        'wcag412',
        'TTv5',
        'TT6.a',
        'EN-301-549',
        'EN-9.4.1.2',
        'RGAAv4',
        'RGAA-10.8.1',
      ],
      description:
        'Ensure aria-hidden elements are not focusable nor contain focusable elements',
      help: 'ARIA hidden element must not be focusable or contain focusable elements',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/aria-hidden-focus?application=playwright',
      nodes: [
        {
          any: [],
          all: [
            {
              id: 'focusable-modal-open',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'No focusable elements while a modal is open',
            },
            {
              id: 'focusable-disabled',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'No focusable elements contained within element',
            },
            {
              id: 'focusable-not-tabbable',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'No focusable elements contained within element',
            },
          ],
          none: [],
          impact: null,
          html: '<div aria-hidden="true" class="sc-55ce9742-6 bgjaLU"></div>',
          target: ['.sc-55ce9742-6'],
        },
      ],
    },
    {
      id: 'aria-prohibited-attr',
      impact: null,
      tags: [
        'cat.aria',
        'wcag2a',
        'wcag412',
        'EN-301-549',
        'EN-9.4.1.2',
        'RGAAv4',
        'RGAA-7.1.1',
      ],
      description:
        "Ensure ARIA attributes are not prohibited for an element's role",
      help: 'Elements must only use permitted ARIA attributes',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright',
      nodes: [
        {
          any: [],
          all: [],
          none: [
            {
              id: 'aria-prohibited-attr',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'ARIA attribute is allowed',
            },
          ],
          impact: null,
          html: '<p aria-live="assertive" id="__next-route-announcer__" role="alert" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 1px; white-space: nowrap; overflow-wrap: normal;"></p>',
          target: ['#__next-route-announcer__'],
        },
      ],
    },
    {
      id: 'aria-required-attr',
      impact: null,
      tags: [
        'cat.aria',
        'wcag2a',
        'wcag412',
        'EN-301-549',
        'EN-9.4.1.2',
        'RGAAv4',
        'RGAA-7.1.1',
      ],
      description:
        'Ensure elements with ARIA roles have all required ARIA attributes',
      help: 'Required ARIA attributes must be provided',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/aria-required-attr?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'aria-required-attr',
              data: null,
              relatedNodes: [],
              impact: 'critical',
              message: 'All required ARIA attributes are present',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p aria-live="assertive" id="__next-route-announcer__" role="alert" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 1px; white-space: nowrap; overflow-wrap: normal;"></p>',
          target: ['#__next-route-announcer__'],
        },
      ],
    },
    {
      id: 'aria-roles',
      impact: null,
      tags: [
        'cat.aria',
        'wcag2a',
        'wcag412',
        'EN-301-549',
        'EN-9.4.1.2',
        'RGAAv4',
        'RGAA-7.1.1',
      ],
      description:
        'Ensure all elements with a role attribute use a valid value',
      help: 'ARIA roles used must conform to valid values',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/aria-roles?application=playwright',
      nodes: [
        {
          any: [],
          all: [],
          none: [
            {
              id: 'invalidrole',
              data: null,
              relatedNodes: [],
              impact: 'critical',
              message: 'ARIA role is valid',
            },
            {
              id: 'abstractrole',
              data: null,
              relatedNodes: [],
              impact: 'critical',
              message: 'Abstract roles are not used',
            },
            {
              id: 'unsupportedrole',
              data: null,
              relatedNodes: [],
              impact: 'critical',
              message: 'ARIA role is supported',
            },
          ],
          impact: null,
          html: '<p aria-live="assertive" id="__next-route-announcer__" role="alert" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 1px; white-space: nowrap; overflow-wrap: normal;"></p>',
          target: ['#__next-route-announcer__'],
        },
      ],
    },
    {
      id: 'aria-valid-attr-value',
      impact: null,
      tags: [
        'cat.aria',
        'wcag2a',
        'wcag412',
        'EN-301-549',
        'EN-9.4.1.2',
        'RGAAv4',
        'RGAA-7.1.1',
      ],
      description: 'Ensure all ARIA attributes have valid values',
      help: 'ARIA attributes must conform to valid values',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr-value?application=playwright',
      nodes: [
        {
          any: [],
          all: [
            {
              id: 'aria-valid-attr-value',
              data: null,
              relatedNodes: [],
              impact: 'critical',
              message: 'ARIA attribute values are valid',
            },
            {
              id: 'aria-errormessage',
              data: null,
              relatedNodes: [],
              impact: 'critical',
              message:
                'aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique',
            },
            {
              id: 'aria-level',
              data: null,
              relatedNodes: [],
              impact: 'critical',
              message: 'aria-level values are valid',
            },
          ],
          none: [],
          impact: null,
          html: '<p aria-live="assertive" id="__next-route-announcer__" role="alert" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 1px; white-space: nowrap; overflow-wrap: normal;"></p>',
          target: ['#__next-route-announcer__'],
        },
      ],
    },
    {
      id: 'aria-valid-attr',
      impact: null,
      tags: [
        'cat.aria',
        'wcag2a',
        'wcag412',
        'EN-301-549',
        'EN-9.4.1.2',
        'RGAAv4',
        'RGAA-7.1.1',
      ],
      description:
        'Ensure attributes that begin with aria- are valid ARIA attributes',
      help: 'ARIA attributes must conform to valid names',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'aria-valid-attr',
              data: null,
              relatedNodes: [],
              impact: 'critical',
              message: 'ARIA attribute name is valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p aria-live="assertive" id="__next-route-announcer__" role="alert" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 1px; white-space: nowrap; overflow-wrap: normal;"></p>',
          target: ['#__next-route-announcer__'],
        },
      ],
    },
    {
      id: 'avoid-inline-spacing',
      impact: null,
      tags: [
        'cat.structure',
        'wcag21aa',
        'wcag1412',
        'EN-301-549',
        'EN-9.1.4.12',
        'ACT',
      ],
      description:
        'Ensure that text spacing set through style attributes can be adjusted with custom stylesheets',
      help: 'Inline text spacing must be adjustable with custom stylesheets',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/avoid-inline-spacing?application=playwright',
      nodes: [
        {
          any: [],
          all: [
            {
              id: 'important-letter-spacing',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'Letter-spacing in the style attribute is not set to !important, or meets the minimum',
            },
            {
              id: 'important-word-spacing',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'word-spacing in the style attribute is not set to !important, or meets the minimum',
            },
            {
              id: 'important-line-height',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'line-height in the style attribute is not set to !important, or meets the minimum',
            },
          ],
          none: [],
          impact: null,
          html: '<div style="color:#FF7E55" class="sc-55ce9742-19 hUPeLP">AI Lab</div>',
          target: [
            '.sc-38ad1aac-15 > div:nth-child(1) > .sc-55ce9742-19.hUPeLP',
          ],
        },
        {
          any: [],
          all: [
            {
              id: 'important-letter-spacing',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'Letter-spacing in the style attribute is not set to !important, or meets the minimum',
            },
            {
              id: 'important-word-spacing',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'word-spacing in the style attribute is not set to !important, or meets the minimum',
            },
            {
              id: 'important-line-height',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'line-height in the style attribute is not set to !important, or meets the minimum',
            },
          ],
          none: [],
          impact: null,
          html: '<ul style="list-style:none;padding:0;margin:10px 0 18px">',
          target: ['.sc-55ce9742-23.iDlWmg > ul'],
        },
        {
          any: [],
          all: [
            {
              id: 'important-letter-spacing',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'Letter-spacing in the style attribute is not set to !important, or meets the minimum',
            },
            {
              id: 'important-word-spacing',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'word-spacing in the style attribute is not set to !important, or meets the minimum',
            },
            {
              id: 'important-line-height',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'line-height in the style attribute is not set to !important, or meets the minimum',
            },
          ],
          none: [],
          impact: null,
          html: '<li style="padding:8px 0;color:#3B3D44"><span style="color:#FF5B2E;margin-right:10px">✓</span>we verify participants</li>',
          target: ['.sc-55ce9742-23.iDlWmg > ul > li:nth-child(1)'],
        },
        {
          any: [],
          all: [
            {
              id: 'important-letter-spacing',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'Letter-spacing in the style attribute is not set to !important, or meets the minimum',
            },
            {
              id: 'important-word-spacing',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'word-spacing in the style attribute is not set to !important, or meets the minimum',
            },
            {
              id: 'important-line-height',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'line-height in the style attribute is not set to !important, or meets the minimum',
            },
          ],
          none: [],
          impact: null,
          html: '<span style="color:#FF5B2E;margin-right:10px">✓</span>',
          target: ['li:nth-child(1) > span'],
        },
        {
          any: [],
          all: [
            {
              id: 'important-letter-spacing',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'Letter-spacing in the style attribute is not set to !important, or meets the minimum',
            },
            {
              id: 'important-word-spacing',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'word-spacing in the style attribute is not set to !important, or meets the minimum',
            },
            {
              id: 'important-line-height',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'line-height in the style attribute is not set to !important, or meets the minimum',
            },
          ],
          none: [],
          impact: null,
          html: '<li style="padding:8px 0;color:#3B3D44"><span style="color:#FF5B2E;margin-right:10px">✓</span>we curate access</li>',
          target: ['.sc-55ce9742-23.iDlWmg > ul > li:nth-child(2)'],
        },
        {
          any: [],
          all: [
            {
              id: 'important-letter-spacing',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'Letter-spacing in the style attribute is not set to !important, or meets the minimum',
            },
            {
              id: 'important-word-spacing',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'word-spacing in the style attribute is not set to !important, or meets the minimum',
            },
            {
              id: 'important-line-height',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'line-height in the style attribute is not set to !important, or meets the minimum',
            },
          ],
          none: [],
          impact: null,
          html: '<span style="color:#FF5B2E;margin-right:10px">✓</span>',
          target: ['li:nth-child(2) > span'],
        },
        {
          any: [],
          all: [
            {
              id: 'important-letter-spacing',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'Letter-spacing in the style attribute is not set to !important, or meets the minimum',
            },
            {
              id: 'important-word-spacing',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'word-spacing in the style attribute is not set to !important, or meets the minimum',
            },
            {
              id: 'important-line-height',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'line-height in the style attribute is not set to !important, or meets the minimum',
            },
          ],
          none: [],
          impact: null,
          html: '<li style="padding:8px 0;color:#3B3D44"><span style="color:#FF5B2E;margin-right:10px">✓</span>we stay involved in execution</li>',
          target: ['.sc-55ce9742-23.iDlWmg > ul > li:nth-child(3)'],
        },
        {
          any: [],
          all: [
            {
              id: 'important-letter-spacing',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'Letter-spacing in the style attribute is not set to !important, or meets the minimum',
            },
            {
              id: 'important-word-spacing',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'word-spacing in the style attribute is not set to !important, or meets the minimum',
            },
            {
              id: 'important-line-height',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'line-height in the style attribute is not set to !important, or meets the minimum',
            },
          ],
          none: [],
          impact: null,
          html: '<span style="color:#FF5B2E;margin-right:10px">✓</span>',
          target: ['li:nth-child(3) > span'],
        },
        {
          any: [],
          all: [
            {
              id: 'important-letter-spacing',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'Letter-spacing in the style attribute is not set to !important, or meets the minimum',
            },
            {
              id: 'important-word-spacing',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'word-spacing in the style attribute is not set to !important, or meets the minimum',
            },
            {
              id: 'important-line-height',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'line-height in the style attribute is not set to !important, or meets the minimum',
            },
          ],
          none: [],
          impact: null,
          html: '<h3 style="font-size:26px" class="sc-55ce9742-29 oumRg">This ensures:</h3>',
          target: ['.sc-38ad1aac-24 > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [],
          all: [
            {
              id: 'important-letter-spacing',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'Letter-spacing in the style attribute is not set to !important, or meets the minimum',
            },
            {
              id: 'important-word-spacing',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'word-spacing in the style attribute is not set to !important, or meets the minimum',
            },
            {
              id: 'important-line-height',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'line-height in the style attribute is not set to !important, or meets the minimum',
            },
          ],
          none: [],
          impact: null,
          html: '<h1 style="font-size:clamp(36px, 5vw, 64px);max-width:16ch" class="sc-55ce9742-10 frjUjB">A new kind of professional network.</h1>',
          target: ['.sc-55ce9742-0.jOoHfR > h1'],
        },
        {
          any: [],
          all: [
            {
              id: 'important-letter-spacing',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'Letter-spacing in the style attribute is not set to !important, or meets the minimum',
            },
            {
              id: 'important-word-spacing',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'word-spacing in the style attribute is not set to !important, or meets the minimum',
            },
            {
              id: 'important-line-height',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'line-height in the style attribute is not set to !important, or meets the minimum',
            },
          ],
          none: [],
          impact: null,
          html: '<div style="margin-top:28px" class="sc-55ce9742-13 fXwvkL"><div class="sc-977eafde-0 gwtsdv"><button class="sc-55ce9742-14 kqsRLa">Get Access →</button></div><a class="sc-55ce9742-15 kWbzHd" href="https://t.me/freecode_academy">Join Telegram Channel</a></div>',
          target: ['#cta > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-13.fXwvkL'],
        },
      ],
    },
    {
      id: 'button-name',
      impact: 'critical',
      tags: [
        'cat.name-role-value',
        'wcag2a',
        'wcag412',
        'section508',
        'section508.22.a',
        'TTv5',
        'TT6.a',
        'EN-301-549',
        'EN-9.4.1.2',
        'ACT',
        'RGAAv4',
        'RGAA-11.9.1',
      ],
      description: 'Ensure buttons have discernible text',
      help: 'Buttons must have discernible text',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'button-has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'critical',
              message:
                'Element has inner text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<button class="sc-55ce9742-14 kqsRLa">Get Access</button>',
          target: [
            '.sc-75c93d8c-2 > .sc-977eafde-0.gwtsdv > .sc-55ce9742-14.kqsRLa',
          ],
        },
        {
          any: [
            {
              id: 'button-has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'critical',
              message:
                'Element has inner text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<button class="sc-55ce9742-14 kqsRLa">Get Access →</button>',
          target: [
            '.sc-55ce9742-7 > .sc-55ce9742-13.fXwvkL > .sc-977eafde-0.gwtsdv > .sc-55ce9742-14.kqsRLa',
          ],
        },
        {
          any: [
            {
              id: 'button-has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'critical',
              message:
                'Element has inner text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<button class="sc-55ce9742-14 kqsRLa">Get Access →</button>',
          target: [
            '#cta > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-13.fXwvkL > .sc-977eafde-0.gwtsdv > .sc-55ce9742-14.kqsRLa',
          ],
        },
      ],
    },
    {
      id: 'bypass',
      impact: null,
      tags: [
        'cat.keyboard',
        'wcag2a',
        'wcag241',
        'section508',
        'section508.22.o',
        'TTv5',
        'TT9.a',
        'EN-301-549',
        'EN-9.2.4.1',
        'RGAAv4',
        'RGAA-12.7.1',
      ],
      description:
        'Ensure each page has at least one mechanism for a user to bypass navigation and jump straight to the content',
      help: 'Page must have means to bypass repeated blocks',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/bypass?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'header-present',
              data: null,
              relatedNodes: [
                {
                  html: '<h1 class="sc-55ce9742-10 frjUjB">An AI R&amp;D Lab That <em>Actually</em> Delivers</h1>',
                  target: ['.sc-55ce9742-7 > div:nth-child(1) > h1'],
                },
                {
                  html: '<h2 class="sc-55ce9742-20 lloRzV">From AI Hype to Real Execution</h2>',
                  target: [
                    '#core > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-22.iTepZm > .sc-55ce9742-23.iDlWmg > h2',
                  ],
                },
                {
                  html: '<h2 class="sc-55ce9742-20 lloRzV">Not Just Link Platform</h2>',
                  target: [
                    '.drRFkU.sc-55ce9742-16:nth-child(5) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
                  ],
                },
                {
                  html: '<h3 class="sc-55ce9742-29 oumRg">AI-Native Approach</h3>',
                  target: [
                    '.dQxoi > article:nth-child(1) > .sc-55ce9742-29.oumRg',
                  ],
                },
                {
                  html: '<h3 class="sc-55ce9742-29 oumRg">Verified Network</h3>',
                  target: [
                    '.dQxoi > article:nth-child(2) > .sc-55ce9742-29.oumRg',
                  ],
                },
                {
                  html: '<h3 class="sc-55ce9742-29 oumRg">Shared Responsibility</h3>',
                  target: [
                    '.dQxoi > article:nth-child(3) > .sc-55ce9742-29.oumRg',
                  ],
                },
                {
                  html: '<h3 class="sc-55ce9742-29 oumRg">Real Collaboration</h3>',
                  target: [
                    '.dQxoi > article:nth-child(4) > .sc-55ce9742-29.oumRg',
                  ],
                },
                {
                  html: '<h2 class="sc-55ce9742-20 lloRzV">From Idea to Delivery</h2>',
                  target: [
                    '#how > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
                  ],
                },
                {
                  html: '<h3 class="sc-55ce9742-29 oumRg">Define the Problem</h3>',
                  target: [
                    '.sc-38ad1aac-13.hrYrPk:nth-child(1) > .sc-55ce9742-29.oumRg',
                  ],
                },
                {
                  html: '<h3 class="sc-55ce9742-29 oumRg">Assemble the Team</h3>',
                  target: [
                    '.sc-38ad1aac-13.hrYrPk:nth-child(2) > .sc-55ce9742-29.oumRg',
                  ],
                },
                {
                  html: '<h3 class="sc-55ce9742-29 oumRg">Execute Together</h3>',
                  target: [
                    '.sc-38ad1aac-13.hrYrPk:nth-child(3) > .sc-55ce9742-29.oumRg',
                  ],
                },
                {
                  html: '<h3 class="sc-55ce9742-29 oumRg">Deliver Results</h3>',
                  target: [
                    '.sc-38ad1aac-13.hrYrPk:nth-child(4) > .sc-55ce9742-29.oumRg',
                  ],
                },
                {
                  html: '<h2 class="sc-55ce9742-20 lloRzV">What You Can Do</h2>',
                  target: [
                    '#offer > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
                  ],
                },
                {
                  html: '<h3 class="sc-55ce9742-29 oumRg">Find Contractors</h3>',
                  target: [
                    '.dQxoj > article:nth-child(1) > .sc-55ce9742-29.oumRg',
                  ],
                },
                {
                  html: '<h3 class="sc-55ce9742-29 oumRg">Build Teams</h3>',
                  target: [
                    '.dQxoj > article:nth-child(2) > .sc-55ce9742-29.oumRg',
                  ],
                },
                {
                  html: '<h3 class="sc-55ce9742-29 oumRg">Publish &amp; Showcase</h3>',
                  target: [
                    '.dQxoj > article:nth-child(3) > .sc-55ce9742-29.oumRg',
                  ],
                },
                {
                  html: '<h3 class="sc-55ce9742-29 oumRg">Manage Projects</h3>',
                  target: [
                    '.dQxoj > article:nth-child(4) > .sc-55ce9742-29.oumRg',
                  ],
                },
                {
                  html: '<h3 class="sc-55ce9742-29 oumRg">Real Opportunities</h3>',
                  target: ['article:nth-child(5) > .sc-55ce9742-29.oumRg'],
                },
                {
                  html: '<h3 class="sc-55ce9742-29 oumRg">Global Collaboration</h3>',
                  target: ['article:nth-child(6) > .sc-55ce9742-29.oumRg'],
                },
                {
                  html: '<h2 class="sc-55ce9742-20 lloRzV">A Public AI Lab + Private Execution Network</h2>',
                  target: ['.sc-38ad1aac-15 > div:nth-child(1) > h2'],
                },
                {
                  html: '<h2 class="sc-55ce9742-20 lloRzV">Accountability Built-In</h2>',
                  target: [
                    '.drRFkU.sc-55ce9742-16:nth-child(9) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-22.iTepZm > .sc-55ce9742-23.iDlWmg > h2',
                  ],
                },
                {
                  html: '<h2 class="sc-55ce9742-20 lloRzV">Built for Three Kinds of Builders</h2>',
                  target: [
                    '.dFgjoQ.sc-55ce9742-16:nth-child(10) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
                  ],
                },
                {
                  html: '<h3>Clients</h3>',
                  target: [
                    '.sc-38ad1aac-19.gEThoD:nth-child(1) > .sc-38ad1aac-21.hkNzqE > h3',
                  ],
                },
                {
                  html: '<h3>Professionals</h3>',
                  target: [
                    '.sc-38ad1aac-19.gEThoD:nth-child(2) > .sc-38ad1aac-21.hkNzqE > h3',
                  ],
                },
                {
                  html: '<h3>Studios &amp; Teams</h3>',
                  target: [
                    '.sc-38ad1aac-19.gEThoD:nth-child(3) > .sc-38ad1aac-21.hkNzqE > h3',
                  ],
                },
                {
                  html: '<h2 class="sc-55ce9742-20 lloRzV">Five things you can actually do here</h2>',
                  target: [
                    '#explore > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
                  ],
                },
                {
                  html: '<h3 class="sc-55ce9742-29 oumRg">Reach real people</h3>',
                  target: [
                    '.sc-38ad1aac-7.fWDGhB[href$="people"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
                  ],
                },
                {
                  html: '<h3 class="sc-55ce9742-29 oumRg">Build Link unit, not Link CV</h3>',
                  target: [
                    '.sc-38ad1aac-7.fWDGhB[href$="teams"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
                  ],
                },
                {
                  html: '<h3 class="sc-55ce9742-29 oumRg">Anything you propose</h3>',
                  target: [
                    '.sc-38ad1aac-7.fWDGhB[href$="offers"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
                  ],
                },
                {
                  html: '<h3 class="sc-55ce9742-29 oumRg">Find partners. Attract investors.</h3>',
                  target: [
                    '.sc-38ad1aac-7.fWDGhB[href$="projects"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
                  ],
                },
                {
                  html: '<h3 class="sc-55ce9742-29 oumRg">Ship small, in public</h3>',
                  target: [
                    '.sc-38ad1aac-7.fWDGhB[href$="tasks"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
                  ],
                },
                {
                  html: '<h3 class="sc-55ce9742-29 oumRg">An invite-only network</h3>',
                  target: [
                    '.sc-38ad1aac-7.fWDGhB[href$="about"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
                  ],
                },
                {
                  html: '<h2 class="sc-55ce9742-20 lloRzV">A Private Network, Not an Open Marketplace</h2>',
                  target: [
                    '#community > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
                  ],
                },
                {
                  html: '<h3 style="font-size:26px" class="sc-55ce9742-29 oumRg">This ensures:</h3>',
                  target: ['.sc-38ad1aac-24 > .sc-55ce9742-29.oumRg'],
                },
                {
                  html: '<h1 style="font-size:clamp(36px, 5vw, 64px);max-width:16ch" class="sc-55ce9742-10 frjUjB">A new kind of professional network.</h1>',
                  target: ['.sc-55ce9742-0.jOoHfR > h1'],
                },
              ],
              impact: ImpactValue.SERIOUS,
              message: 'Page has a heading',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<html>',
          target: ['html'],
        },
      ],
    },
    {
      id: 'color-contrast',
      impact: ImpactValue.SERIOUS,
      tags: [
        'cat.color',
        'wcag2aa',
        'wcag143',
        'TTv5',
        'TT13.c',
        'EN-301-549',
        'EN-9.1.4.3',
        'ACT',
        'RGAAv4',
        'RGAA-3.2.1',
      ],
      description:
        'Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds',
      help: 'Elements must meet minimum color contrast ratio thresholds',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#fbfaf6',
                contrastRatio: 18.35,
                fontSize: '16.5pt (22px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 18.35',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="sc-55ce9742-2 liZVAL" href="/">Freecode Academy</a>',
          target: ['.sc-55ce9742-3 > .sc-55ce9742-2.liZVAL[href="/"]'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#fbfaf6',
                contrastRatio: 10.38,
                fontSize: '10.5pt (14px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.38',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/about">About</a>',
          target: ['nav > a[href$="about"]'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#fbfaf6',
                contrastRatio: 10.38,
                fontSize: '10.5pt (14px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.38',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/people">Members</a>',
          target: ['nav > a[href$="people"]'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#fbfaf6',
                contrastRatio: 10.38,
                fontSize: '10.5pt (14px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.38',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/teams">Teams</a>',
          target: ['nav > a[href$="teams"]'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#fbfaf6',
                contrastRatio: 10.38,
                fontSize: '10.5pt (14px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.38',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/offers">Offers</a>',
          target: ['nav > a[href$="offers"]'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#fbfaf6',
                contrastRatio: 10.38,
                fontSize: '10.5pt (14px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.38',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/projects">Projects</a>',
          target: ['nav > a[href$="projects"]'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#fbfaf6',
                contrastRatio: 10.38,
                fontSize: '10.5pt (14px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.38',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/tasks">Tasks</a>',
          target: ['nav > a[href$="tasks"]'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#fbfaf6',
                contrastRatio: 10.38,
                fontSize: '10.5pt (14px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.38',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/topics">Topics</a>',
          target: ['a[href$="topics"]'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#ffffff',
                bgColor: '#0e0f12',
                contrastRatio: 19.16,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<button class="sc-55ce9742-14 kqsRLa">Get Access</button>',
          target: [
            '.sc-75c93d8c-2 > .sc-977eafde-0.gwtsdv > .sc-55ce9742-14.kqsRLa',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '33.0pt (44px)',
                fontWeight: 'normal',
                expectedContrastRatio: '3:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-3 cBGjZV">4,000+</div>',
          target: [
            '.sc-38ad1aac-2.dqYcSI[href$="people"] > .sc-38ad1aac-3.cBGjZV',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#6b6f78',
                bgColor: '#ffffff',
                contrastRatio: 5.03,
                fontSize: '10.5pt (14px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 5.03',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-4 etjKKK">Members</div>',
          target: [
            '.sc-38ad1aac-2.dqYcSI[href$="people"] > .sc-38ad1aac-4.etjKKK',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '33.0pt (44px)',
                fontWeight: 'normal',
                expectedContrastRatio: '3:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-3 cBGjZV">100+</div>',
          target: [
            '.sc-38ad1aac-2.dqYcSI[href$="teams"] > .sc-38ad1aac-3.cBGjZV',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#6b6f78',
                bgColor: '#ffffff',
                contrastRatio: 5.03,
                fontSize: '10.5pt (14px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 5.03',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-4 etjKKK">Studios &amp; Teams</div>',
          target: [
            '.sc-38ad1aac-2.dqYcSI[href$="teams"] > .sc-38ad1aac-4.etjKKK',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '33.0pt (44px)',
                fontWeight: 'normal',
                expectedContrastRatio: '3:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-3 cBGjZV">14+</div>',
          target: [
            '.sc-38ad1aac-2.dqYcSI:nth-child(3) > .sc-38ad1aac-3.cBGjZV',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#6b6f78',
                bgColor: '#ffffff',
                contrastRatio: 5.03,
                fontSize: '10.5pt (14px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 5.03',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-4 etjKKK">Years of Experience</div>',
          target: [
            '.sc-38ad1aac-2.dqYcSI:nth-child(3) > .sc-38ad1aac-4.etjKKK',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#6b6f78',
                bgColor: '#fbfaf6',
                contrastRatio: 4.82,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 4.82',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-38ad1aac-5 iVvHON">A curated network built over more than Link decade — now reimagined for the AI era.</p>',
          target: ['.sc-38ad1aac-5'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#fbfaf6',
                contrastRatio: 18.35,
                fontSize: '40.5pt (54px)',
                fontWeight: 'normal',
                expectedContrastRatio: '3:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 18.35',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">From AI Hype to Real Execution</h2>',
          target: [
            '#core > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-22.iTepZm > .sc-55ce9742-23.iDlWmg > h2',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#fbfaf6',
                contrastRatio: 10.38,
                fontSize: '12.8pt (17px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.38',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p>Most platforms connect people.<!-- --> <strong>We take it further</strong> — we define problems, assemble teams, and stay responsible until delivery.</p>',
          target: [
            '#core > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-22.iTepZm > .sc-55ce9742-23.iDlWmg > p:nth-child(3)',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#fbfaf6',
                contrastRatio: 18.35,
                fontSize: '12.8pt (17px)',
                fontWeight: 'bold',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 18.35',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<strong>We take it further</strong>',
          target: ['.sc-55ce9742-23.iDlWmg > p:nth-child(3) > strong'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#fbfaf6',
                contrastRatio: 10.38,
                fontSize: '12.8pt (17px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.38',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p>This is not an open marketplace. It’s Link<!-- --> <strong>private, AI-native execution network</strong> where professionals collaborate as one coordinated system.</p>',
          target: ['p:nth-child(4)'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#fbfaf6',
                contrastRatio: 18.35,
                fontSize: '12.8pt (17px)',
                fontWeight: 'bold',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 18.35',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<strong>private, AI-native execution network</strong>',
          target: ['p:nth-child(4) > strong'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#f4efe3',
                contrastRatio: 16.7,
                fontSize: '40.5pt (54px)',
                fontWeight: 'normal',
                expectedContrastRatio: '3:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 16.7',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">Not Just Link Platform</h2>',
          target: [
            '.drRFkU.sc-55ce9742-16:nth-child(5) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '16.5pt (22px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">AI-Native Approach</h3>',
          target: ['.dQxoi > article:nth-child(1) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">We work at the edge of modern AI and technology — not just using tools, but understanding how to apply them.</p>',
          target: ['.dQxoi > article:nth-child(1) > .sc-55ce9742-30.iZKdTJ'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '16.5pt (22px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Verified Network</h3>',
          target: ['.dQxoi > article:nth-child(2) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Every participant is known, vetted, and part of Link trusted environment.</p>',
          target: ['.dQxoi > article:nth-child(2) > .sc-55ce9742-30.iZKdTJ'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '16.5pt (22px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Shared Responsibility</h3>',
          target: ['.dQxoi > article:nth-child(3) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">We don’t disappear after matching. We stay involved and accountable for results.</p>',
          target: ['.dQxoi > article:nth-child(3) > .sc-55ce9742-30.iZKdTJ'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '16.5pt (22px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Real Collaboration</h3>',
          target: ['.dQxoi > article:nth-child(4) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Not gigs. Not random hires. Teams form, execute, and deliver together.</p>',
          target: ['.dQxoi > article:nth-child(4) > .sc-55ce9742-30.iZKdTJ'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#fbfaf6',
                contrastRatio: 18.35,
                fontSize: '40.5pt (54px)',
                fontWeight: 'normal',
                expectedContrastRatio: '3:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 18.35',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">From Idea to Delivery</h2>',
          target: [
            '#how > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#ff5b2e',
                bgColor: '#ffffff',
                contrastRatio: 3.09,
                fontSize: '30.0pt (40px)',
                fontWeight: 'normal',
                expectedContrastRatio: '3:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 3.09',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-14 LwvYV">01</div>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(1) > .sc-38ad1aac-14.LwvYV',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '16.5pt (22px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Define the Problem</h3>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(1) > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">We help turn vague ideas into clear, actionable project scopes.</p>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(1) > .sc-55ce9742-30.iZKdTJ',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#ff5b2e',
                bgColor: '#ffffff',
                contrastRatio: 3.09,
                fontSize: '30.0pt (40px)',
                fontWeight: 'normal',
                expectedContrastRatio: '3:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 3.09',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-14 LwvYV">02</div>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(2) > .sc-38ad1aac-14.LwvYV',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '16.5pt (22px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Assemble the Team</h3>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(2) > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">We match the right experts and teams from within the network.</p>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(2) > .sc-55ce9742-30.iZKdTJ',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#ff5b2e',
                bgColor: '#ffffff',
                contrastRatio: 3.09,
                fontSize: '30.0pt (40px)',
                fontWeight: 'normal',
                expectedContrastRatio: '3:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 3.09',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-14 LwvYV">03</div>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(3) > .sc-38ad1aac-14.LwvYV',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '16.5pt (22px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Execute Together</h3>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(3) > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Work happens inside coordinated teams with shared goals and visibility.</p>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(3) > .sc-55ce9742-30.iZKdTJ',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#ff5b2e',
                bgColor: '#ffffff',
                contrastRatio: 3.09,
                fontSize: '30.0pt (40px)',
                fontWeight: 'normal',
                expectedContrastRatio: '3:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 3.09',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-14 LwvYV">04</div>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(4) > .sc-38ad1aac-14.LwvYV',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '16.5pt (22px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Deliver Results</h3>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(4) > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">We stay involved until real outcomes are achieved.</p>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(4) > .sc-55ce9742-30.iZKdTJ',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '40.5pt (54px)',
                fontWeight: 'normal',
                expectedContrastRatio: '3:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">What You Can Do</h2>',
          target: [
            '#offer > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '16.5pt (22px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Find Contractors</h3>',
          target: ['.dQxoj > article:nth-child(1) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Work with verified professionals and trusted teams.</p>',
          target: ['.dQxoj > article:nth-child(1) > .sc-55ce9742-30.iZKdTJ'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '16.5pt (22px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Build Teams</h3>',
          target: ['.dQxoj > article:nth-child(2) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Create or join teams to execute complex projects together.</p>',
          target: ['.dQxoj > article:nth-child(2) > .sc-55ce9742-30.iZKdTJ'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '16.5pt (22px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Publish &amp; Showcase</h3>',
          target: ['.dQxoj > article:nth-child(3) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Share your cases, research, and portfolio to build reputation.</p>',
          target: ['.dQxoj > article:nth-child(3) > .sc-55ce9742-30.iZKdTJ'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '16.5pt (22px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Manage Projects</h3>',
          target: ['.dQxoj > article:nth-child(4) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Organize tasks, collaborate, and track progress in one system.</p>',
          target: ['.dQxoj > article:nth-child(4) > .sc-55ce9742-30.iZKdTJ'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '16.5pt (22px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Real Opportunities</h3>',
          target: ['article:nth-child(5) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Discover projects, partnerships, and collaborations inside Link private network.</p>',
          target: ['article:nth-child(5) > .sc-55ce9742-30.iZKdTJ'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '16.5pt (22px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Global Collaboration</h3>',
          target: ['article:nth-child(6) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Work with professionals from different countries and backgrounds.</p>',
          target: ['article:nth-child(6) > .sc-55ce9742-30.iZKdTJ'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#f4efe3',
                contrastRatio: 16.7,
                fontSize: '40.5pt (54px)',
                fontWeight: 'normal',
                expectedContrastRatio: '3:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 16.7',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">Accountability Built-In</h2>',
          target: [
            '.drRFkU.sc-55ce9742-16:nth-child(9) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-22.iTepZm > .sc-55ce9742-23.iDlWmg > h2',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#f4efe3',
                contrastRatio: 9.44,
                fontSize: '12.8pt (17px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 9.44',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p>Unlike traditional platforms:</p>',
          target: [
            '.drRFkU.sc-55ce9742-16:nth-child(9) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-22.iTepZm > .sc-55ce9742-23.iDlWmg > p:nth-child(3)',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#f4efe3',
                contrastRatio: 9.44,
                fontSize: '12.0pt (16px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 9.44',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li style="padding:8px 0;color:#3B3D44"><span style="color:#FF5B2E;margin-right:10px">✓</span>we verify participants</li>',
          target: ['.sc-55ce9742-23.iDlWmg > ul > li:nth-child(1)'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#f4efe3',
                contrastRatio: 9.44,
                fontSize: '12.0pt (16px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 9.44',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li style="padding:8px 0;color:#3B3D44"><span style="color:#FF5B2E;margin-right:10px">✓</span>we curate access</li>',
          target: ['.sc-55ce9742-23.iDlWmg > ul > li:nth-child(2)'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#f4efe3',
                contrastRatio: 9.44,
                fontSize: '12.0pt (16px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 9.44',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li style="padding:8px 0;color:#3B3D44"><span style="color:#FF5B2E;margin-right:10px">✓</span>we stay involved in execution</li>',
          target: ['.sc-55ce9742-23.iDlWmg > ul > li:nth-child(3)'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#f4efe3',
                contrastRatio: 16.7,
                fontSize: '12.8pt (17px)',
                fontWeight: 'bold',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 16.7',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<strong>We don’t just connect people — we stand behind the work.</strong>',
          target: ['p:nth-child(5) > strong'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#fbfaf6',
                contrastRatio: 18.35,
                fontSize: '40.5pt (54px)',
                fontWeight: 'normal',
                expectedContrastRatio: '3:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 18.35',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">Built for Three Kinds of Builders</h2>',
          target: [
            '.dFgjoQ.sc-55ce9742-16:nth-child(10) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '16.5pt (22px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3>Clients</h3>',
          target: [
            '.sc-38ad1aac-19.gEThoD:nth-child(1) > .sc-38ad1aac-21.hkNzqE > h3',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p>Who need clarity in AI chaos and reliable execution.</p>',
          target: [
            '.sc-38ad1aac-19.gEThoD:nth-child(1) > .sc-38ad1aac-21.hkNzqE > p',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '16.5pt (22px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3>Professionals</h3>',
          target: [
            '.sc-38ad1aac-19.gEThoD:nth-child(2) > .sc-38ad1aac-21.hkNzqE > h3',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p>Who want access to real projects and strong teams.</p>',
          target: [
            '.sc-38ad1aac-19.gEThoD:nth-child(2) > .sc-38ad1aac-21.hkNzqE > p',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '16.5pt (22px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3>Studios &amp; Teams</h3>',
          target: [
            '.sc-38ad1aac-19.gEThoD:nth-child(3) > .sc-38ad1aac-21.hkNzqE > h3',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p>Who want to collaborate, scale, and access new deal flow.</p>',
          target: [
            '.sc-38ad1aac-19.gEThoD:nth-child(3) > .sc-38ad1aac-21.hkNzqE > p',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#fbfaf6',
                contrastRatio: 18.35,
                fontSize: '40.5pt (54px)',
                fontWeight: 'normal',
                expectedContrastRatio: '3:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 18.35',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">Five things you can actually do here</h2>',
          target: [
            '#explore > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#fbfaf6',
                contrastRatio: 10.38,
                fontSize: '12.8pt (17px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.38',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-21 dWWHwn">Everyone reads. Members create. Each section answers one question: why should I bother?</p>',
          target: [
            '#explore > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > .sc-55ce9742-21.dWWHwn',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '16.5pt (22px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Reach real people</h3>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="people"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Browsing is open. Direct contact requires an invite — that\'s the whole point of Link closed club.</p>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="people"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-30.iZKdTJ',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '12.0pt (16px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<span class="sc-38ad1aac-11 oqXGO">See members</span>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="people"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-11.oqXGO',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '16.5pt (22px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Build Link unit, not Link CV</h3>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="teams"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Stack portfolios and services. Clients hire teams. Investors back teams. Delegate inside.</p>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="teams"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-30.iZKdTJ',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '12.0pt (16px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<span class="sc-38ad1aac-11 oqXGO">See teams</span>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="teams"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-11.oqXGO',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '16.5pt (22px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Anything you propose</h3>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="offers"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Service, collaboration, research, hiring — one free-form format. A real human behind every post.</p>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="offers"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-30.iZKdTJ',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '12.0pt (16px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<span class="sc-38ad1aac-11 oqXGO">See offers</span>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="offers"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-11.oqXGO',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '16.5pt (22px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Find partners. Attract investors.</h3>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="projects"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Public badges signal intent:<!-- --> <strong>Looking for partners</strong>,<!-- --> <strong>Seeking investor</strong>,<!-- --> <strong>Help wanted</strong>.</p>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="projects"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-30.iZKdTJ',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '11.3pt (15px)',
                fontWeight: 'bold',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<strong>Looking for partners</strong>',
          target: ['.sc-55ce9742-30.iZKdTJ > strong:nth-child(1)'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '11.3pt (15px)',
                fontWeight: 'bold',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<strong>Seeking investor</strong>',
          target: ['strong:nth-child(2)'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '11.3pt (15px)',
                fontWeight: 'bold',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<strong>Help wanted</strong>',
          target: ['strong:nth-child(3)'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '12.0pt (16px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<span class="sc-38ad1aac-11 oqXGO">See projects</span>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="projects"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-11.oqXGO',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '16.5pt (22px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Ship small, in public</h3>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="tasks"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Scoped work attached to real projects. Closed tasks become public worklogs and case studies.</p>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="tasks"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-30.iZKdTJ',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '12.0pt (16px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<span class="sc-38ad1aac-11 oqXGO">See tasks</span>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="tasks"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-11.oqXGO',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '16.5pt (22px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">An invite-only network</h3>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="about"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">14 years of curation. No spam, no noise, no fake profiles. Read the philosophy.</p>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="about"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-30.iZKdTJ',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '12.0pt (16px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<span class="sc-38ad1aac-11 oqXGO">About Freecode Academy</span>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="about"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-11.oqXGO',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '40.5pt (54px)',
                fontWeight: 'normal',
                expectedContrastRatio: '3:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">A Private Network, Not an Open Marketplace</h2>',
          target: [
            '#community > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '12.8pt (17px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-21 dWWHwn">Access is limited and curated.</p>',
          target: [
            '#community > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > .sc-55ce9742-21.dWWHwn',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '19.5pt (26px)',
                fontWeight: 'normal',
                expectedContrastRatio: '3:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 style="font-size:26px" class="sc-55ce9742-29 oumRg">This ensures:</h3>',
          target: ['.sc-38ad1aac-24 > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '12.0pt (16px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>higher signal, lower noise</li>',
          target: ['.sc-38ad1aac-24 > ul > li:nth-child(1)'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '12.0pt (16px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>trusted interactions</li>',
          target: ['.sc-38ad1aac-24 > ul > li:nth-child(2)'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#3b3d44',
                bgColor: '#ffffff',
                contrastRatio: 10.84,
                fontSize: '12.0pt (16px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 10.84',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>real opportunities instead of spam</li>',
          target: ['.sc-38ad1aac-24 > ul > li:nth-child(3)'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#ffffff',
                bgColor: '#0e0f12',
                contrastRatio: 19.16,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<button class="sc-55ce9742-14 kqsRLa">Get Access →</button>',
          target: [
            '#cta > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-13.fXwvkL > .sc-977eafde-0.gwtsdv > .sc-55ce9742-14.kqsRLa',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#0e0f12',
                bgColor: '#ffffff',
                contrastRatio: 19.16,
                fontSize: '11.3pt (15px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 19.16',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="sc-55ce9742-15 kWbzHd" href="https://t.me/freecode_academy">Join Telegram Channel</a>',
          target: [
            '#cta > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-13.fXwvkL > .sc-55ce9742-15.kWbzHd[href$="freecode_academy"]',
          ],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#6b6f78',
                bgColor: '#fbfaf6',
                contrastRatio: 4.82,
                fontSize: '16.5pt (22px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 4.82',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="sc-55ce9742-2 liZVAL" href="/">Freecode Academy</a>',
          target: ['.sc-4037caf9-1 > .sc-55ce9742-2.liZVAL[href="/"]'],
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#6b6f78',
                bgColor: '#fbfaf6',
                contrastRatio: 4.82,
                fontSize: '10.5pt (14px)',
                fontWeight: 'normal',
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has sufficient color contrast of 4.82',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div>© <!-- -->2026<!-- --> Freecode Academy Network. All rights shared.</div>',
          target: ['.sc-4037caf9-1 > div'],
        },
      ],
    },
    {
      id: 'document-title',
      impact: null,
      tags: [
        'cat.text-alternatives',
        'wcag2a',
        'wcag242',
        'TTv5',
        'TT12.a',
        'EN-301-549',
        'EN-9.2.4.2',
        'ACT',
        'RGAAv4',
        'RGAA-8.5.1',
      ],
      description:
        'Ensure each HTML document contains a non-empty <title> element',
      help: 'Documents must have <title> element to aid in navigation',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'doc-has-title',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Document has a non-empty <title> element',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<html>',
          target: ['html'],
        },
      ],
    },
    {
      id: 'duplicate-id-aria',
      impact: null,
      tags: [
        'cat.parsing',
        'wcag2a',
        'wcag412',
        'EN-301-549',
        'EN-9.4.1.2',
        'RGAAv4',
        'RGAA-8.2.1',
      ],
      description:
        'Ensure every id attribute value used in ARIA and in labels is unique',
      help: 'IDs used in ARIA and labels must be unique',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/duplicate-id-aria?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'duplicate-id-aria',
              data: 'burger-toggle',
              relatedNodes: [],
              impact: 'critical',
              message:
                'Document has no elements referenced with ARIA or labels that share the same id attribute',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<input type="checkbox" id="burger-toggle" class="sc-75c93d8c-0 hHEAqV">',
          target: ['#burger-toggle'],
        },
      ],
    },
    {
      id: 'empty-heading',
      impact: null,
      tags: ['cat.name-role-value', 'best-practice'],
      description: 'Ensure headings have discernible text',
      help: 'Headings should not be empty',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h1 class="sc-55ce9742-10 frjUjB">An AI R&amp;D Lab That <em>Actually</em> Delivers</h1>',
          target: ['.sc-55ce9742-7 > div:nth-child(1) > h1'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">From AI Hype to Real Execution</h2>',
          target: [
            '#core > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-22.iTepZm > .sc-55ce9742-23.iDlWmg > h2',
          ],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">Not Just Link Platform</h2>',
          target: [
            '.drRFkU.sc-55ce9742-16:nth-child(5) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
          ],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">AI-Native Approach</h3>',
          target: ['.dQxoi > article:nth-child(1) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Verified Network</h3>',
          target: ['.dQxoi > article:nth-child(2) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Shared Responsibility</h3>',
          target: ['.dQxoi > article:nth-child(3) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Real Collaboration</h3>',
          target: ['.dQxoi > article:nth-child(4) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">From Idea to Delivery</h2>',
          target: [
            '#how > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
          ],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Define the Problem</h3>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(1) > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Assemble the Team</h3>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(2) > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Execute Together</h3>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(3) > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Deliver Results</h3>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(4) > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">What You Can Do</h2>',
          target: [
            '#offer > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
          ],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Find Contractors</h3>',
          target: ['.dQxoj > article:nth-child(1) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Build Teams</h3>',
          target: ['.dQxoj > article:nth-child(2) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Publish &amp; Showcase</h3>',
          target: ['.dQxoj > article:nth-child(3) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Manage Projects</h3>',
          target: ['.dQxoj > article:nth-child(4) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Real Opportunities</h3>',
          target: ['article:nth-child(5) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Global Collaboration</h3>',
          target: ['article:nth-child(6) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">A Public AI Lab + Private Execution Network</h2>',
          target: ['.sc-38ad1aac-15 > div:nth-child(1) > h2'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">Accountability Built-In</h2>',
          target: [
            '.drRFkU.sc-55ce9742-16:nth-child(9) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-22.iTepZm > .sc-55ce9742-23.iDlWmg > h2',
          ],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">Built for Three Kinds of Builders</h2>',
          target: [
            '.dFgjoQ.sc-55ce9742-16:nth-child(10) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
          ],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3>Clients</h3>',
          target: [
            '.sc-38ad1aac-19.gEThoD:nth-child(1) > .sc-38ad1aac-21.hkNzqE > h3',
          ],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3>Professionals</h3>',
          target: [
            '.sc-38ad1aac-19.gEThoD:nth-child(2) > .sc-38ad1aac-21.hkNzqE > h3',
          ],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3>Studios &amp; Teams</h3>',
          target: [
            '.sc-38ad1aac-19.gEThoD:nth-child(3) > .sc-38ad1aac-21.hkNzqE > h3',
          ],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">Five things you can actually do here</h2>',
          target: [
            '#explore > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
          ],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Reach real people</h3>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="people"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Build Link unit, not Link CV</h3>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="teams"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Anything you propose</h3>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="offers"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Find partners. Attract investors.</h3>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="projects"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Ship small, in public</h3>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="tasks"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">An invite-only network</h3>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="about"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">A Private Network, Not an Open Marketplace</h2>',
          target: [
            '#community > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
          ],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 style="font-size:26px" class="sc-55ce9742-29 oumRg">This ensures:</h3>',
          target: ['.sc-38ad1aac-24 > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h1 style="font-size:clamp(36px, 5vw, 64px);max-width:16ch" class="sc-55ce9742-10 frjUjB">A new kind of professional network.</h1>',
          target: ['.sc-55ce9742-0.jOoHfR > h1'],
        },
      ],
    },
    {
      id: 'heading-order',
      impact: null,
      tags: ['cat.semantics', 'best-practice'],
      description: 'Ensure the order of headings is semantically correct',
      help: 'Heading levels should only increase by one',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'heading-order',
              data: {
                headingOrder: [
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > h1:nth-child(2)',
                    ],
                    level: 1,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(4) > div > div > div:nth-child(1) > h2:nth-child(2)',
                    ],
                    level: 2,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(5) > div > div:nth-child(1) > h2:nth-child(2)',
                    ],
                    level: 2,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(5) > div > div:nth-child(2) > article:nth-child(1) > h3:nth-child(2)',
                    ],
                    level: 3,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(5) > div > div:nth-child(2) > article:nth-child(2) > h3:nth-child(2)',
                    ],
                    level: 3,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(5) > div > div:nth-child(2) > article:nth-child(3) > h3:nth-child(2)',
                    ],
                    level: 3,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(5) > div > div:nth-child(2) > article:nth-child(4) > h3:nth-child(2)',
                    ],
                    level: 3,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(6) > div > div:nth-child(1) > h2:nth-child(2)',
                    ],
                    level: 2,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(6) > div > div:nth-child(2) > div:nth-child(1) > h3:nth-child(2)',
                    ],
                    level: 3,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(6) > div > div:nth-child(2) > div:nth-child(2) > h3:nth-child(2)',
                    ],
                    level: 3,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(6) > div > div:nth-child(2) > div:nth-child(3) > h3:nth-child(2)',
                    ],
                    level: 3,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(6) > div > div:nth-child(2) > div:nth-child(4) > h3:nth-child(2)',
                    ],
                    level: 3,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(7) > div > div:nth-child(1) > h2:nth-child(2)',
                    ],
                    level: 2,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(7) > div > div:nth-child(2) > article:nth-child(1) > h3:nth-child(1)',
                    ],
                    level: 3,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(7) > div > div:nth-child(2) > article:nth-child(2) > h3:nth-child(1)',
                    ],
                    level: 3,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(7) > div > div:nth-child(2) > article:nth-child(3) > h3:nth-child(1)',
                    ],
                    level: 3,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(7) > div > div:nth-child(2) > article:nth-child(4) > h3:nth-child(1)',
                    ],
                    level: 3,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(7) > div > div:nth-child(2) > article:nth-child(5) > h3:nth-child(1)',
                    ],
                    level: 3,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(7) > div > div:nth-child(2) > article:nth-child(6) > h3:nth-child(1)',
                    ],
                    level: 3,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(8) > div > div > div:nth-child(1) > h2:nth-child(2)',
                    ],
                    level: 2,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(9) > div > div > div:nth-child(2) > h2:nth-child(2)',
                    ],
                    level: 2,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(10) > div > div:nth-child(1) > h2:nth-child(2)',
                    ],
                    level: 2,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(10) > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h3:nth-child(1)',
                    ],
                    level: 3,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(10) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > h3:nth-child(1)',
                    ],
                    level: 3,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(10) > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > h3:nth-child(1)',
                    ],
                    level: 3,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(11) > div > div:nth-child(1) > h2:nth-child(2)',
                    ],
                    level: 2,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(11) > div > div:nth-child(2) > a:nth-child(1) > div:nth-child(2) > h3:nth-child(2)',
                    ],
                    level: 3,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(11) > div > div:nth-child(2) > a:nth-child(2) > div:nth-child(2) > h3:nth-child(2)',
                    ],
                    level: 3,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(11) > div > div:nth-child(2) > a:nth-child(3) > div:nth-child(2) > h3:nth-child(2)',
                    ],
                    level: 3,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(11) > div > div:nth-child(2) > a:nth-child(4) > div:nth-child(2) > h3:nth-child(2)',
                    ],
                    level: 3,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(11) > div > div:nth-child(2) > a:nth-child(5) > div:nth-child(2) > h3:nth-child(2)',
                    ],
                    level: 3,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(11) > div > div:nth-child(2) > a:nth-child(6) > div:nth-child(2) > h3:nth-child(2)',
                    ],
                    level: 3,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(12) > div > div:nth-child(1) > h2:nth-child(2)',
                    ],
                    level: 2,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(12) > div > div:nth-child(2) > div:nth-child(2) > h3:nth-child(1)',
                    ],
                    level: 3,
                  },
                  {
                    ancestry: [
                      'html > body > div:nth-child(1) > section:nth-child(13) > div > h1:nth-child(2)',
                    ],
                    level: 1,
                  },
                ],
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h1 class="sc-55ce9742-10 frjUjB">An AI R&amp;D Lab That <em>Actually</em> Delivers</h1>',
          target: ['.sc-55ce9742-7 > div:nth-child(1) > h1'],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">From AI Hype to Real Execution</h2>',
          target: [
            '#core > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-22.iTepZm > .sc-55ce9742-23.iDlWmg > h2',
          ],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">Not Just Link Platform</h2>',
          target: [
            '.drRFkU.sc-55ce9742-16:nth-child(5) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
          ],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">AI-Native Approach</h3>',
          target: ['.dQxoi > article:nth-child(1) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Verified Network</h3>',
          target: ['.dQxoi > article:nth-child(2) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Shared Responsibility</h3>',
          target: ['.dQxoi > article:nth-child(3) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Real Collaboration</h3>',
          target: ['.dQxoi > article:nth-child(4) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">From Idea to Delivery</h2>',
          target: [
            '#how > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
          ],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Define the Problem</h3>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(1) > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Assemble the Team</h3>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(2) > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Execute Together</h3>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(3) > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Deliver Results</h3>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(4) > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">What You Can Do</h2>',
          target: [
            '#offer > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
          ],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Find Contractors</h3>',
          target: ['.dQxoj > article:nth-child(1) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Build Teams</h3>',
          target: ['.dQxoj > article:nth-child(2) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Publish &amp; Showcase</h3>',
          target: ['.dQxoj > article:nth-child(3) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Manage Projects</h3>',
          target: ['.dQxoj > article:nth-child(4) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Real Opportunities</h3>',
          target: ['article:nth-child(5) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Global Collaboration</h3>',
          target: ['article:nth-child(6) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">A Public AI Lab + Private Execution Network</h2>',
          target: ['.sc-38ad1aac-15 > div:nth-child(1) > h2'],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">Accountability Built-In</h2>',
          target: [
            '.drRFkU.sc-55ce9742-16:nth-child(9) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-22.iTepZm > .sc-55ce9742-23.iDlWmg > h2',
          ],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">Built for Three Kinds of Builders</h2>',
          target: [
            '.dFgjoQ.sc-55ce9742-16:nth-child(10) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
          ],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3>Clients</h3>',
          target: [
            '.sc-38ad1aac-19.gEThoD:nth-child(1) > .sc-38ad1aac-21.hkNzqE > h3',
          ],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3>Professionals</h3>',
          target: [
            '.sc-38ad1aac-19.gEThoD:nth-child(2) > .sc-38ad1aac-21.hkNzqE > h3',
          ],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3>Studios &amp; Teams</h3>',
          target: [
            '.sc-38ad1aac-19.gEThoD:nth-child(3) > .sc-38ad1aac-21.hkNzqE > h3',
          ],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">Five things you can actually do here</h2>',
          target: [
            '#explore > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
          ],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Reach real people</h3>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="people"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Build Link unit, not Link CV</h3>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="teams"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Anything you propose</h3>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="offers"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Find partners. Attract investors.</h3>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="projects"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Ship small, in public</h3>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="tasks"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">An invite-only network</h3>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="about"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">A Private Network, Not an Open Marketplace</h2>',
          target: [
            '#community > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
          ],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 style="font-size:26px" class="sc-55ce9742-29 oumRg">This ensures:</h3>',
          target: ['.sc-38ad1aac-24 > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'heading-order',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Heading order valid',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h1 style="font-size:clamp(36px, 5vw, 64px);max-width:16ch" class="sc-55ce9742-10 frjUjB">A new kind of professional network.</h1>',
          target: ['.sc-55ce9742-0.jOoHfR > h1'],
        },
      ],
    },
    {
      id: 'image-alt',
      impact: null,
      tags: [
        'cat.text-alternatives',
        'wcag2a',
        'wcag111',
        'section508',
        'section508.22.a',
        'TTv5',
        'TT7.a',
        'TT7.b',
        'EN-301-549',
        'EN-9.1.1.1',
        'ACT',
        'RGAAv4',
        'RGAA-1.1.1',
      ],
      description:
        'Ensure <img> elements have alternative text or a role of none or presentation',
      help: 'Images must have alternative text',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'has-alt',
              data: null,
              relatedNodes: [],
              impact: 'critical',
              message: 'Element has an alt attribute',
            },
          ],
          all: [],
          none: [
            {
              id: 'alt-space-value',
              data: null,
              relatedNodes: [],
              impact: 'critical',
              message: 'Element has a valid alt attribute value',
            },
          ],
          impact: null,
          html: '<img src="/_next/static/media/network.988cdbc7.jpg" alt="Distributed team collaborating" loading="lazy">',
          target: ['img[alt="Distributed team collaborating"]'],
        },
        {
          any: [
            {
              id: 'has-alt',
              data: null,
              relatedNodes: [],
              impact: 'critical',
              message: 'Element has an alt attribute',
            },
          ],
          all: [],
          none: [
            {
              id: 'alt-space-value',
              data: null,
              relatedNodes: [],
              impact: 'critical',
              message: 'Element has a valid alt attribute value',
            },
          ],
          impact: null,
          html: '<img src="/_next/static/media/lab.f0426066.jpg" alt="AI research lab" loading="lazy">',
          target: ['img[alt="AI research lab"]'],
        },
        {
          any: [
            {
              id: 'has-alt',
              data: null,
              relatedNodes: [],
              impact: 'critical',
              message: 'Element has an alt attribute',
            },
          ],
          all: [],
          none: [
            {
              id: 'alt-space-value',
              data: null,
              relatedNodes: [],
              impact: 'critical',
              message: 'Element has a valid alt attribute value',
            },
          ],
          impact: null,
          html: '<img src="/_next/static/media/trust.a5e85844.jpg" alt="Accountability and trust" loading="lazy">',
          target: ['img[alt="Accountability and trust"]'],
        },
      ],
    },
    {
      id: 'image-redundant-alt',
      impact: null,
      tags: ['cat.text-alternatives', 'best-practice'],
      description: 'Ensure image alternative is not repeated as text',
      help: 'Alternative text of images should not be repeated as text',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright',
      nodes: [
        {
          any: [],
          all: [],
          none: [
            {
              id: 'duplicate-img-label',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message:
                'Element does not duplicate existing text in <img> alt text',
            },
          ],
          impact: null,
          html: '<img src="/_next/static/media/network.988cdbc7.jpg" alt="Distributed team collaborating" loading="lazy">',
          target: ['img[alt="Distributed team collaborating"]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: 'duplicate-img-label',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message:
                'Element does not duplicate existing text in <img> alt text',
            },
          ],
          impact: null,
          html: '<img src="/_next/static/media/lab.f0426066.jpg" alt="AI research lab" loading="lazy">',
          target: ['img[alt="AI research lab"]'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: 'duplicate-img-label',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message:
                'Element does not duplicate existing text in <img> alt text',
            },
          ],
          impact: null,
          html: '<img src="/_next/static/media/trust.a5e85844.jpg" alt="Accountability and trust" loading="lazy">',
          target: ['img[alt="Accountability and trust"]'],
        },
      ],
    },
    {
      id: 'landmark-banner-is-top-level',
      impact: null,
      tags: ['cat.semantics', 'best-practice'],
      description: 'Ensure the banner landmark is at top level',
      help: 'Banner landmark should not be contained in another landmark',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'landmark-is-top-level',
              data: {
                role: 'banner',
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'The banner landmark is at the top level.',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<header class="sc-55ce9742-1 sc-75c93d8c-3 kSHLze dkaNJz">',
          target: ['header'],
        },
      ],
    },
    {
      id: 'landmark-contentinfo-is-top-level',
      impact: null,
      tags: ['cat.semantics', 'best-practice'],
      description: 'Ensure the contentinfo landmark is at top level',
      help: 'Contentinfo landmark should not be contained in another landmark',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/landmark-contentinfo-is-top-level?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'landmark-is-top-level',
              data: {
                role: 'contentinfo',
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'The contentinfo landmark is at the top level.',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<footer class="sc-4037caf9-0 ObEWE"><div class="sc-55ce9742-0 sc-4037caf9-1 jOoHfR cDEkRb"><a class="sc-55ce9742-2 liZVAL" href="/">Freecode Academy</a><div>© <!-- -->2026<!-- --> Freecode Academy Network. All rights shared.</div></div></footer>',
          target: ['footer'],
        },
      ],
    },
    {
      id: 'landmark-no-duplicate-banner',
      impact: null,
      tags: ['cat.semantics', 'best-practice'],
      description: 'Ensure the document has at most one banner landmark',
      help: 'Document should not have more than one banner landmark',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'page-no-duplicate-banner',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Document does not have more than one banner landmark',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<header class="sc-55ce9742-1 sc-75c93d8c-3 kSHLze dkaNJz">',
          target: ['header'],
        },
      ],
    },
    {
      id: 'landmark-no-duplicate-contentinfo',
      impact: null,
      tags: ['cat.semantics', 'best-practice'],
      description: 'Ensure the document has at most one contentinfo landmark',
      help: 'Document should not have more than one contentinfo landmark',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'page-no-duplicate-contentinfo',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message:
                'Document does not have more than one contentinfo landmark',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<footer class="sc-4037caf9-0 ObEWE"><div class="sc-55ce9742-0 sc-4037caf9-1 jOoHfR cDEkRb"><a class="sc-55ce9742-2 liZVAL" href="/">Freecode Academy</a><div>© <!-- -->2026<!-- --> Freecode Academy Network. All rights shared.</div></div></footer>',
          target: ['footer'],
        },
      ],
    },
    {
      id: 'landmark-unique',
      impact: null,
      tags: ['cat.semantics', 'best-practice'],
      description: 'Ensure landmarks are unique',
      help: 'Landmarks should have a unique role or role/label/title (i.e. accessible name) combination',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'landmark-is-unique',
              data: {
                role: 'banner',
                accessibleText: null,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message:
                'Landmarks must have a unique role or role/label/title (i.e. accessible name) combination',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<header class="sc-55ce9742-1 sc-75c93d8c-3 kSHLze dkaNJz">',
          target: ['header'],
        },
        {
          any: [
            {
              id: 'landmark-is-unique',
              data: {
                role: 'navigation',
                accessibleText: null,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message:
                'Landmarks must have a unique role or role/label/title (i.e. accessible name) combination',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<nav class="sc-55ce9742-4 goigmF"><a href="/about">About</a><a href="/people">Members</a><a href="/teams">Teams</a><a href="/offers">Offers</a><a href="/projects">Projects</a><a href="/tasks">Tasks</a><a href="/topics">Topics</a></nav>',
          target: ['nav'],
        },
        {
          any: [
            {
              id: 'landmark-is-unique',
              data: {
                role: 'contentinfo',
                accessibleText: null,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message:
                'Landmarks must have a unique role or role/label/title (i.e. accessible name) combination',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<footer class="sc-4037caf9-0 ObEWE"><div class="sc-55ce9742-0 sc-4037caf9-1 jOoHfR cDEkRb"><a class="sc-55ce9742-2 liZVAL" href="/">Freecode Academy</a><div>© <!-- -->2026<!-- --> Freecode Academy Network. All rights shared.</div></div></footer>',
          target: ['footer'],
        },
      ],
    },
    {
      id: 'link-name',
      impact: null,
      tags: [
        'cat.name-role-value',
        'wcag2a',
        'wcag244',
        'wcag412',
        'section508',
        'section508.22.a',
        'TTv5',
        'TT6.a',
        'EN-301-549',
        'EN-9.2.4.4',
        'EN-9.4.1.2',
        'ACT',
        'RGAAv4',
        'RGAA-6.2.1',
      ],
      description: 'Ensure links have discernible text',
      help: 'Links must have discernible text',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [
            {
              id: 'focusable-no-name',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element is not in tab order or has accessible text',
            },
          ],
          impact: null,
          html: '<a class="sc-55ce9742-2 liZVAL" href="/">Freecode Academy</a>',
          target: ['.sc-55ce9742-3 > .sc-55ce9742-2.liZVAL[href="/"]'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [
            {
              id: 'focusable-no-name',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element is not in tab order or has accessible text',
            },
          ],
          impact: null,
          html: '<a href="/about">About</a>',
          target: ['nav > a[href$="about"]'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [
            {
              id: 'focusable-no-name',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element is not in tab order or has accessible text',
            },
          ],
          impact: null,
          html: '<a href="/people">Members</a>',
          target: ['nav > a[href$="people"]'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [
            {
              id: 'focusable-no-name',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element is not in tab order or has accessible text',
            },
          ],
          impact: null,
          html: '<a href="/teams">Teams</a>',
          target: ['nav > a[href$="teams"]'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [
            {
              id: 'focusable-no-name',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element is not in tab order or has accessible text',
            },
          ],
          impact: null,
          html: '<a href="/offers">Offers</a>',
          target: ['nav > a[href$="offers"]'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [
            {
              id: 'focusable-no-name',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element is not in tab order or has accessible text',
            },
          ],
          impact: null,
          html: '<a href="/projects">Projects</a>',
          target: ['nav > a[href$="projects"]'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [
            {
              id: 'focusable-no-name',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element is not in tab order or has accessible text',
            },
          ],
          impact: null,
          html: '<a href="/tasks">Tasks</a>',
          target: ['nav > a[href$="tasks"]'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [
            {
              id: 'focusable-no-name',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element is not in tab order or has accessible text',
            },
          ],
          impact: null,
          html: '<a href="/topics">Topics</a>',
          target: ['a[href$="topics"]'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [
            {
              id: 'focusable-no-name',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element is not in tab order or has accessible text',
            },
          ],
          impact: null,
          html: '<a class="sc-55ce9742-15 kWbzHd" href="https://t.me/freecode_academy">Join Telegram Channel</a>',
          target: [
            '.sc-55ce9742-7 > .sc-55ce9742-13.fXwvkL > .sc-55ce9742-15.kWbzHd[href$="freecode_academy"]',
          ],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [
            {
              id: 'focusable-no-name',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element is not in tab order or has accessible text',
            },
          ],
          impact: null,
          html: '<a class="sc-38ad1aac-2 dqYcSI" href="/people"><div class="sc-38ad1aac-3 cBGjZV">4,000+</div><div class="sc-38ad1aac-4 etjKKK">Members</div></a>',
          target: ['.sc-38ad1aac-2.dqYcSI[href$="people"]'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [
            {
              id: 'focusable-no-name',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element is not in tab order or has accessible text',
            },
          ],
          impact: null,
          html: '<a class="sc-38ad1aac-2 dqYcSI" href="/teams"><div class="sc-38ad1aac-3 cBGjZV">100+</div><div class="sc-38ad1aac-4 etjKKK">Studios &amp; Teams</div></a>',
          target: ['.sc-38ad1aac-2.dqYcSI[href$="teams"]'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [
            {
              id: 'focusable-no-name',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element is not in tab order or has accessible text',
            },
          ],
          impact: null,
          html: '<a class="sc-38ad1aac-7 fWDGhB" href="/people">',
          target: ['.sc-38ad1aac-7.fWDGhB[href$="people"]'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [
            {
              id: 'focusable-no-name',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element is not in tab order or has accessible text',
            },
          ],
          impact: null,
          html: '<a class="sc-38ad1aac-7 fWDGhB" href="/teams">',
          target: ['.sc-38ad1aac-7.fWDGhB[href$="teams"]'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [
            {
              id: 'focusable-no-name',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element is not in tab order or has accessible text',
            },
          ],
          impact: null,
          html: '<a class="sc-38ad1aac-7 fWDGhB" href="/offers">',
          target: ['.sc-38ad1aac-7.fWDGhB[href$="offers"]'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [
            {
              id: 'focusable-no-name',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element is not in tab order or has accessible text',
            },
          ],
          impact: null,
          html: '<a class="sc-38ad1aac-7 fWDGhB" href="/projects">',
          target: ['.sc-38ad1aac-7.fWDGhB[href$="projects"]'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [
            {
              id: 'focusable-no-name',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element is not in tab order or has accessible text',
            },
          ],
          impact: null,
          html: '<a class="sc-38ad1aac-7 fWDGhB" href="/tasks">',
          target: ['.sc-38ad1aac-7.fWDGhB[href$="tasks"]'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [
            {
              id: 'focusable-no-name',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element is not in tab order or has accessible text',
            },
          ],
          impact: null,
          html: '<a class="sc-38ad1aac-7 fWDGhB" href="/about">',
          target: ['.sc-38ad1aac-7.fWDGhB[href$="about"]'],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [
            {
              id: 'focusable-no-name',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element is not in tab order or has accessible text',
            },
          ],
          impact: null,
          html: '<a class="sc-55ce9742-15 kWbzHd" href="https://t.me/freecode_academy">Join Telegram Channel</a>',
          target: [
            '#cta > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-13.fXwvkL > .sc-55ce9742-15.kWbzHd[href$="freecode_academy"]',
          ],
        },
        {
          any: [
            {
              id: 'has-visible-text',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element has text that is visible to screen readers',
            },
          ],
          all: [],
          none: [
            {
              id: 'focusable-no-name',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element is not in tab order or has accessible text',
            },
          ],
          impact: null,
          html: '<a class="sc-55ce9742-2 liZVAL" href="/">Freecode Academy</a>',
          target: ['.sc-4037caf9-1 > .sc-55ce9742-2.liZVAL[href="/"]'],
        },
      ],
    },
    {
      id: 'list',
      impact: null,
      tags: [
        'cat.structure',
        'wcag2a',
        'wcag131',
        'EN-301-549',
        'EN-9.1.3.1',
        'RGAAv4',
        'RGAA-9.3.1',
      ],
      description: 'Ensure that lists are structured correctly',
      help: '<ul> and <ol> must only directly contain <li>, <script> or <template> elements',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/list?application=playwright',
      nodes: [
        {
          any: [],
          all: [],
          none: [
            {
              id: 'only-listitems',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'List element only has direct children that are allowed inside <li> elements',
            },
          ],
          impact: null,
          html: '<ul class="sc-38ad1aac-16 hVGHUN"><li>experiments → prototypes</li><li>prototypes → products</li><li>ideas → working systems</li></ul>',
          target: ['.sc-38ad1aac-16'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: 'only-listitems',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'List element only has direct children that are allowed inside <li> elements',
            },
          ],
          impact: null,
          html: '<ul style="list-style:none;padding:0;margin:10px 0 18px">',
          target: ['.sc-55ce9742-23.iDlWmg > ul'],
        },
        {
          any: [],
          all: [],
          none: [
            {
              id: 'only-listitems',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'List element only has direct children that are allowed inside <li> elements',
            },
          ],
          impact: null,
          html: '<ul><li>higher signal, lower noise</li><li>trusted interactions</li><li>real opportunities instead of spam</li></ul>',
          target: ['.sc-38ad1aac-24 > ul'],
        },
      ],
    },
    {
      id: 'listitem',
      impact: null,
      tags: [
        'cat.structure',
        'wcag2a',
        'wcag131',
        'EN-301-549',
        'EN-9.1.3.1',
        'RGAAv4',
        'RGAA-9.3.1',
      ],
      description: 'Ensure <li> elements are used semantically',
      help: '<li> elements must be contained in a <ul> or <ol>',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'listitem',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'List item has a <ul>, <ol> or role="list" parent element',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>experiments → prototypes</li>',
          target: ['.sc-38ad1aac-16 > li:nth-child(1)'],
        },
        {
          any: [
            {
              id: 'listitem',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'List item has a <ul>, <ol> or role="list" parent element',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>prototypes → products</li>',
          target: ['.sc-38ad1aac-16 > li:nth-child(2)'],
        },
        {
          any: [
            {
              id: 'listitem',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'List item has a <ul>, <ol> or role="list" parent element',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>ideas → working systems</li>',
          target: ['.sc-38ad1aac-16 > li:nth-child(3)'],
        },
        {
          any: [
            {
              id: 'listitem',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'List item has a <ul>, <ol> or role="list" parent element',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li style="padding:8px 0;color:#3B3D44"><span style="color:#FF5B2E;margin-right:10px">✓</span>we verify participants</li>',
          target: ['.sc-55ce9742-23.iDlWmg > ul > li:nth-child(1)'],
        },
        {
          any: [
            {
              id: 'listitem',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'List item has a <ul>, <ol> or role="list" parent element',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li style="padding:8px 0;color:#3B3D44"><span style="color:#FF5B2E;margin-right:10px">✓</span>we curate access</li>',
          target: ['.sc-55ce9742-23.iDlWmg > ul > li:nth-child(2)'],
        },
        {
          any: [
            {
              id: 'listitem',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'List item has a <ul>, <ol> or role="list" parent element',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li style="padding:8px 0;color:#3B3D44"><span style="color:#FF5B2E;margin-right:10px">✓</span>we stay involved in execution</li>',
          target: ['.sc-55ce9742-23.iDlWmg > ul > li:nth-child(3)'],
        },
        {
          any: [
            {
              id: 'listitem',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'List item has a <ul>, <ol> or role="list" parent element',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>higher signal, lower noise</li>',
          target: ['.sc-38ad1aac-24 > ul > li:nth-child(1)'],
        },
        {
          any: [
            {
              id: 'listitem',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'List item has a <ul>, <ol> or role="list" parent element',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>trusted interactions</li>',
          target: ['.sc-38ad1aac-24 > ul > li:nth-child(2)'],
        },
        {
          any: [
            {
              id: 'listitem',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message:
                'List item has a <ul>, <ol> or role="list" parent element',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>real opportunities instead of spam</li>',
          target: ['.sc-38ad1aac-24 > ul > li:nth-child(3)'],
        },
      ],
    },
    {
      id: 'meta-viewport-large',
      impact: null,
      tags: ['cat.sensory-and-visual-cues', 'best-practice'],
      description:
        'Ensure <meta name="viewport"> can scale a significant amount',
      help: 'Users should be able to zoom and scale the text up to 500%',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/meta-viewport-large?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'meta-viewport-large',
              data: null,
              relatedNodes: [],
              impact: 'minor',
              message:
                '<meta> tag does not prevent significant zooming on mobile devices',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no" data-next-head="">',
          target: ['meta[name="viewport"]'],
        },
      ],
    },
    {
      id: 'nested-interactive',
      impact: null,
      tags: [
        'cat.keyboard',
        'wcag2a',
        'wcag412',
        'TTv5',
        'TT6.a',
        'EN-301-549',
        'EN-9.4.1.2',
        'RGAAv4',
        'RGAA-7.1.1',
      ],
      description:
        'Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies',
      help: 'Interactive controls must not be nested',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/nested-interactive?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'no-focusable-content',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element does not have focusable descendants',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<button class="sc-55ce9742-14 kqsRLa">Get Access</button>',
          target: [
            '.sc-75c93d8c-2 > .sc-977eafde-0.gwtsdv > .sc-55ce9742-14.kqsRLa',
          ],
        },
        {
          any: [
            {
              id: 'no-focusable-content',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element does not have focusable descendants',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<button class="sc-55ce9742-14 kqsRLa">Get Access →</button>',
          target: [
            '.sc-55ce9742-7 > .sc-55ce9742-13.fXwvkL > .sc-977eafde-0.gwtsdv > .sc-55ce9742-14.kqsRLa',
          ],
        },
        {
          any: [
            {
              id: 'no-focusable-content',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element does not have focusable descendants',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<img src="/_next/static/media/network.988cdbc7.jpg" alt="Distributed team collaborating" loading="lazy">',
          target: ['img[alt="Distributed team collaborating"]'],
        },
        {
          any: [
            {
              id: 'no-focusable-content',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element does not have focusable descendants',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<img src="/_next/static/media/lab.f0426066.jpg" alt="AI research lab" loading="lazy">',
          target: ['img[alt="AI research lab"]'],
        },
        {
          any: [
            {
              id: 'no-focusable-content',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element does not have focusable descendants',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<img src="/_next/static/media/trust.a5e85844.jpg" alt="Accountability and trust" loading="lazy">',
          target: ['img[alt="Accountability and trust"]'],
        },
        {
          any: [
            {
              id: 'no-focusable-content',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element does not have focusable descendants',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<button class="sc-55ce9742-14 kqsRLa">Get Access →</button>',
          target: [
            '#cta > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-13.fXwvkL > .sc-977eafde-0.gwtsdv > .sc-55ce9742-14.kqsRLa',
          ],
        },
        {
          any: [
            {
              id: 'no-focusable-content',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'Element does not have focusable descendants',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<button type="button" class="sc-a79fa3e6-18 hQbpmF"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></button>',
          target: ['.sc-a79fa3e6-18'],
        },
      ],
    },
    {
      id: 'page-has-heading-one',
      impact: null,
      tags: ['cat.semantics', 'best-practice'],
      description:
        'Ensure that the page, or at least one of its frames contains a level-one heading',
      help: 'Page should contain a level-one heading',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright',
      nodes: [
        {
          any: [],
          all: [
            {
              id: 'page-has-heading-one',
              data: null,
              relatedNodes: [
                {
                  html: '<h1 class="sc-55ce9742-10 frjUjB">An AI R&amp;D Lab That <em>Actually</em> Delivers</h1>',
                  target: ['.sc-55ce9742-7 > div:nth-child(1) > h1'],
                },
                {
                  html: '<h1 style="font-size:clamp(36px, 5vw, 64px);max-width:16ch" class="sc-55ce9742-10 frjUjB">A new kind of professional network.</h1>',
                  target: ['.sc-55ce9742-0.jOoHfR > h1'],
                },
              ],
              impact: ImpactValue.MODERATE,
              message: 'Page has at least one level-one heading',
            },
          ],
          none: [],
          impact: null,
          html: '<html>',
          target: ['html'],
        },
      ],
    },
    {
      id: 'region',
      impact: ImpactValue.MODERATE,
      tags: ['cat.keyboard', 'best-practice', 'RGAAv4', 'RGAA-9.2.1'],
      description: 'Ensure all page content is contained by landmarks',
      help: 'All page content should be contained by landmarks',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/region?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div id="__next">',
          target: ['#__next'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<header class="sc-55ce9742-1 sc-75c93d8c-3 kSHLze dkaNJz">',
          target: ['header'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-0 sc-55ce9742-3 jOoHfR jaZXAf">',
          target: ['.sc-55ce9742-3'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="sc-55ce9742-2 liZVAL" href="/">Freecode Academy</a>',
          target: ['.sc-55ce9742-3 > .sc-55ce9742-2.liZVAL[href="/"]'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-75c93d8c-2 gcrJvX">',
          target: ['.sc-75c93d8c-2'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<nav class="sc-55ce9742-4 goigmF"><a href="/about">About</a><a href="/people">Members</a><a href="/teams">Teams</a><a href="/offers">Offers</a><a href="/projects">Projects</a><a href="/tasks">Tasks</a><a href="/topics">Topics</a></nav>',
          target: ['nav'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/about">About</a>',
          target: ['nav > a[href$="about"]'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/people">Members</a>',
          target: ['nav > a[href$="people"]'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/teams">Teams</a>',
          target: ['nav > a[href$="teams"]'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/offers">Offers</a>',
          target: ['nav > a[href$="offers"]'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/projects">Projects</a>',
          target: ['nav > a[href$="projects"]'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/tasks">Tasks</a>',
          target: ['nav > a[href$="tasks"]'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a href="/topics">Topics</a>',
          target: ['a[href$="topics"]'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-977eafde-0 gwtsdv"><button class="sc-55ce9742-14 kqsRLa">Get Access</button></div>',
          target: ['.sc-75c93d8c-2 > .sc-977eafde-0.gwtsdv'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<button class="sc-55ce9742-14 kqsRLa">Get Access</button>',
          target: [
            '.sc-75c93d8c-2 > .sc-977eafde-0.gwtsdv > .sc-55ce9742-14.kqsRLa',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<section class="sc-55ce9742-5 gtlzur">',
          target: ['.sc-55ce9742-5'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-0 sc-55ce9742-7 jOoHfR gsDDrb">',
          target: ['.sc-55ce9742-7'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<span class="sc-55ce9742-9 gVNGiD">AI R&amp;D Lab · Execution Network</span>',
          target: ['.sc-55ce9742-9'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h1 class="sc-55ce9742-10 frjUjB">An AI R&amp;D Lab That <em>Actually</em> Delivers</h1>',
          target: ['.sc-55ce9742-7 > div:nth-child(1) > h1'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<em>Actually</em>',
          target: ['em'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-11 iuYqNI">We cut through AI chaos, define the right solutions, and execute them with Link distributed network of verified professionals.</p>',
          target: [
            '.sc-55ce9742-7 > div:nth-child(1) > .sc-55ce9742-11.iuYqNI',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-13 fXwvkL"><div class="sc-977eafde-0 gwtsdv"><button class="sc-55ce9742-14 kqsRLa">Get Access →</button></div><a class="sc-55ce9742-15 kWbzHd" href="https://t.me/freecode_academy">Join Telegram Channel</a></div>',
          target: ['.sc-55ce9742-7 > .sc-55ce9742-13.fXwvkL'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-977eafde-0 gwtsdv"><button class="sc-55ce9742-14 kqsRLa">Get Access →</button></div>',
          target: [
            '.sc-55ce9742-7 > .sc-55ce9742-13.fXwvkL > .sc-977eafde-0.gwtsdv',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<button class="sc-55ce9742-14 kqsRLa">Get Access →</button>',
          target: [
            '.sc-55ce9742-7 > .sc-55ce9742-13.fXwvkL > .sc-977eafde-0.gwtsdv > .sc-55ce9742-14.kqsRLa',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-0 jOoHfR">',
          target: ['.sc-38ad1aac-0 > .sc-55ce9742-0.jOoHfR'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-1 gfMJuj">',
          target: ['.sc-38ad1aac-1'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="sc-38ad1aac-2 dqYcSI" href="/people"><div class="sc-38ad1aac-3 cBGjZV">4,000+</div><div class="sc-38ad1aac-4 etjKKK">Members</div></a>',
          target: ['.sc-38ad1aac-2.dqYcSI[href$="people"]'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-3 cBGjZV">4,000+</div>',
          target: [
            '.sc-38ad1aac-2.dqYcSI[href$="people"] > .sc-38ad1aac-3.cBGjZV',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-4 etjKKK">Members</div>',
          target: [
            '.sc-38ad1aac-2.dqYcSI[href$="people"] > .sc-38ad1aac-4.etjKKK',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="sc-38ad1aac-2 dqYcSI" href="/teams"><div class="sc-38ad1aac-3 cBGjZV">100+</div><div class="sc-38ad1aac-4 etjKKK">Studios &amp; Teams</div></a>',
          target: ['.sc-38ad1aac-2.dqYcSI[href$="teams"]'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-3 cBGjZV">100+</div>',
          target: [
            '.sc-38ad1aac-2.dqYcSI[href$="teams"] > .sc-38ad1aac-3.cBGjZV',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-4 etjKKK">Studios &amp; Teams</div>',
          target: [
            '.sc-38ad1aac-2.dqYcSI[href$="teams"] > .sc-38ad1aac-4.etjKKK',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-2 dqYcSI"><div class="sc-38ad1aac-3 cBGjZV">14+</div><div class="sc-38ad1aac-4 etjKKK">Years of Experience</div></div>',
          target: ['.sc-38ad1aac-2.dqYcSI:nth-child(3)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-3 cBGjZV">14+</div>',
          target: [
            '.sc-38ad1aac-2.dqYcSI:nth-child(3) > .sc-38ad1aac-3.cBGjZV',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-4 etjKKK">Years of Experience</div>',
          target: [
            '.sc-38ad1aac-2.dqYcSI:nth-child(3) > .sc-38ad1aac-4.etjKKK',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-38ad1aac-5 iVvHON">A curated network built over more than Link decade — now reimagined for the AI era.</p>',
          target: ['.sc-38ad1aac-5'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-0 jOoHfR">',
          target: ['#core > .sc-55ce9742-0.jOoHfR'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-22 iTepZm">',
          target: ['#core > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-22.iTepZm'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-23 iDlWmg">',
          target: [
            '#core > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-22.iTepZm > .sc-55ce9742-23.iDlWmg',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-19 hUPeLP">Core Idea</div>',
          target: [
            '#core > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-22.iTepZm > .sc-55ce9742-23.iDlWmg > .sc-55ce9742-19.hUPeLP',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">From AI Hype to Real Execution</h2>',
          target: [
            '#core > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-22.iTepZm > .sc-55ce9742-23.iDlWmg > h2',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p>Most platforms connect people.<!-- --> <strong>We take it further</strong> — we define problems, assemble teams, and stay responsible until delivery.</p>',
          target: [
            '#core > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-22.iTepZm > .sc-55ce9742-23.iDlWmg > p:nth-child(3)',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<strong>We take it further</strong>',
          target: ['.sc-55ce9742-23.iDlWmg > p:nth-child(3) > strong'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p>This is not an open marketplace. It’s Link<!-- --> <strong>private, AI-native execution network</strong> where professionals collaborate as one coordinated system.</p>',
          target: ['p:nth-child(4)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<strong>private, AI-native execution network</strong>',
          target: ['p:nth-child(4) > strong'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-24 hsTLCD"><img src="/_next/static/media/network.988cdbc7.jpg" alt="Distributed team collaborating" loading="lazy"></div>',
          target: [
            '#core > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-22.iTepZm > .sc-55ce9742-24.hsTLCD',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<img src="/_next/static/media/network.988cdbc7.jpg" alt="Distributed team collaborating" loading="lazy">',
          target: ['img[alt="Distributed team collaborating"]'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-0 jOoHfR">',
          target: [
            '.drRFkU.sc-55ce9742-16:nth-child(5) > .sc-55ce9742-0.jOoHfR',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-17 gOBZST"><div class="sc-55ce9742-19 hUPeLP">What Makes Us Different</div><h2 class="sc-55ce9742-20 lloRzV">Not Just Link Platform</h2></div>',
          target: [
            '.drRFkU.sc-55ce9742-16:nth-child(5) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-19 hUPeLP">What Makes Us Different</div>',
          target: [
            '.drRFkU.sc-55ce9742-16:nth-child(5) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > .sc-55ce9742-19.hUPeLP',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">Not Just Link Platform</h2>',
          target: [
            '.drRFkU.sc-55ce9742-16:nth-child(5) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-25 dQxoi">',
          target: ['.dQxoi'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<article class="sc-55ce9742-26 cWpEsW"><div class="sc-55ce9742-28 cvFudy">AI</div><h3 class="sc-55ce9742-29 oumRg">AI-Native Approach</h3><p class="sc-55ce9742-30 iZKdTJ">We work at the edge of modern AI and technology — not just using tools, but understanding how to apply them.</p></article>',
          target: ['.dQxoi > article:nth-child(1)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-28 cvFudy">AI</div>',
          target: ['article:nth-child(1) > .sc-55ce9742-28.cvFudy'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">AI-Native Approach</h3>',
          target: ['.dQxoi > article:nth-child(1) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">We work at the edge of modern AI and technology — not just using tools, but understanding how to apply them.</p>',
          target: ['.dQxoi > article:nth-child(1) > .sc-55ce9742-30.iZKdTJ'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<article class="sc-55ce9742-26 cWpEsW"><div class="sc-55ce9742-28 cvFudy">✓</div><h3 class="sc-55ce9742-29 oumRg">Verified Network</h3><p class="sc-55ce9742-30 iZKdTJ">Every participant is known, vetted, and part of Link trusted environment.</p></article>',
          target: ['.dQxoi > article:nth-child(2)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-28 cvFudy">✓</div>',
          target: ['article:nth-child(2) > .sc-55ce9742-28.cvFudy'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Verified Network</h3>',
          target: ['.dQxoi > article:nth-child(2) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Every participant is known, vetted, and part of Link trusted environment.</p>',
          target: ['.dQxoi > article:nth-child(2) > .sc-55ce9742-30.iZKdTJ'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<article class="sc-55ce9742-26 cWpEsW"><div class="sc-55ce9742-28 cvFudy">↔</div><h3 class="sc-55ce9742-29 oumRg">Shared Responsibility</h3><p class="sc-55ce9742-30 iZKdTJ">We don’t disappear after matching. We stay involved and accountable for results.</p></article>',
          target: ['.dQxoi > article:nth-child(3)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-28 cvFudy">↔</div>',
          target: ['article:nth-child(3) > .sc-55ce9742-28.cvFudy'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Shared Responsibility</h3>',
          target: ['.dQxoi > article:nth-child(3) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">We don’t disappear after matching. We stay involved and accountable for results.</p>',
          target: ['.dQxoi > article:nth-child(3) > .sc-55ce9742-30.iZKdTJ'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<article class="sc-55ce9742-26 cWpEsW"><div class="sc-55ce9742-28 cvFudy">◎</div><h3 class="sc-55ce9742-29 oumRg">Real Collaboration</h3><p class="sc-55ce9742-30 iZKdTJ">Not gigs. Not random hires. Teams form, execute, and deliver together.</p></article>',
          target: ['.dQxoi > article:nth-child(4)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-28 cvFudy">◎</div>',
          target: ['article:nth-child(4) > .sc-55ce9742-28.cvFudy'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Real Collaboration</h3>',
          target: ['.dQxoi > article:nth-child(4) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Not gigs. Not random hires. Teams form, execute, and deliver together.</p>',
          target: ['.dQxoi > article:nth-child(4) > .sc-55ce9742-30.iZKdTJ'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-0 jOoHfR">',
          target: ['#how > .sc-55ce9742-0.jOoHfR'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-17 gOBZST"><div class="sc-55ce9742-19 hUPeLP">How It Works</div><h2 class="sc-55ce9742-20 lloRzV">From Idea to Delivery</h2></div>',
          target: ['#how > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-19 hUPeLP">How It Works</div>',
          target: [
            '#how > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > .sc-55ce9742-19.hUPeLP',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">From Idea to Delivery</h2>',
          target: [
            '#how > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-12 cLpLrp">',
          target: ['.sc-38ad1aac-12'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-13 hrYrPk"><div class="sc-38ad1aac-14 LwvYV">01</div><h3 class="sc-55ce9742-29 oumRg">Define the Problem</h3><p class="sc-55ce9742-30 iZKdTJ">We help turn vague ideas into clear, actionable project scopes.</p></div>',
          target: ['.sc-38ad1aac-13.hrYrPk:nth-child(1)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-14 LwvYV">01</div>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(1) > .sc-38ad1aac-14.LwvYV',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Define the Problem</h3>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(1) > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">We help turn vague ideas into clear, actionable project scopes.</p>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(1) > .sc-55ce9742-30.iZKdTJ',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-13 hrYrPk"><div class="sc-38ad1aac-14 LwvYV">02</div><h3 class="sc-55ce9742-29 oumRg">Assemble the Team</h3><p class="sc-55ce9742-30 iZKdTJ">We match the right experts and teams from within the network.</p></div>',
          target: ['.sc-38ad1aac-13.hrYrPk:nth-child(2)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-14 LwvYV">02</div>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(2) > .sc-38ad1aac-14.LwvYV',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Assemble the Team</h3>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(2) > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">We match the right experts and teams from within the network.</p>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(2) > .sc-55ce9742-30.iZKdTJ',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-13 hrYrPk"><div class="sc-38ad1aac-14 LwvYV">03</div><h3 class="sc-55ce9742-29 oumRg">Execute Together</h3><p class="sc-55ce9742-30 iZKdTJ">Work happens inside coordinated teams with shared goals and visibility.</p></div>',
          target: ['.sc-38ad1aac-13.hrYrPk:nth-child(3)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-14 LwvYV">03</div>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(3) > .sc-38ad1aac-14.LwvYV',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Execute Together</h3>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(3) > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Work happens inside coordinated teams with shared goals and visibility.</p>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(3) > .sc-55ce9742-30.iZKdTJ',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-13 hrYrPk"><div class="sc-38ad1aac-14 LwvYV">04</div><h3 class="sc-55ce9742-29 oumRg">Deliver Results</h3><p class="sc-55ce9742-30 iZKdTJ">We stay involved until real outcomes are achieved.</p></div>',
          target: ['.sc-38ad1aac-13.hrYrPk:nth-child(4)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-14 LwvYV">04</div>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(4) > .sc-38ad1aac-14.LwvYV',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Deliver Results</h3>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(4) > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">We stay involved until real outcomes are achieved.</p>',
          target: [
            '.sc-38ad1aac-13.hrYrPk:nth-child(4) > .sc-55ce9742-30.iZKdTJ',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-0 jOoHfR">',
          target: ['#offer > .sc-55ce9742-0.jOoHfR'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-17 gOBZST"><div class="sc-55ce9742-19 hUPeLP">What We Offer</div><h2 class="sc-55ce9742-20 lloRzV">What You Can Do</h2></div>',
          target: ['#offer > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-19 hUPeLP">What We Offer</div>',
          target: [
            '#offer > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > .sc-55ce9742-19.hUPeLP',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">What You Can Do</h2>',
          target: [
            '#offer > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-25 dQxoj">',
          target: ['.dQxoj'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<article class="sc-55ce9742-26 cWpEsW"><h3 class="sc-55ce9742-29 oumRg">Find Contractors</h3><p class="sc-55ce9742-30 iZKdTJ">Work with verified professionals and trusted teams.</p></article>',
          target: ['.dQxoj > article:nth-child(1)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Find Contractors</h3>',
          target: ['.dQxoj > article:nth-child(1) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Work with verified professionals and trusted teams.</p>',
          target: ['.dQxoj > article:nth-child(1) > .sc-55ce9742-30.iZKdTJ'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<article class="sc-55ce9742-26 cWpEsW"><h3 class="sc-55ce9742-29 oumRg">Build Teams</h3><p class="sc-55ce9742-30 iZKdTJ">Create or join teams to execute complex projects together.</p></article>',
          target: ['.dQxoj > article:nth-child(2)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Build Teams</h3>',
          target: ['.dQxoj > article:nth-child(2) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Create or join teams to execute complex projects together.</p>',
          target: ['.dQxoj > article:nth-child(2) > .sc-55ce9742-30.iZKdTJ'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<article class="sc-55ce9742-26 cWpEsW"><h3 class="sc-55ce9742-29 oumRg">Publish &amp; Showcase</h3><p class="sc-55ce9742-30 iZKdTJ">Share your cases, research, and portfolio to build reputation.</p></article>',
          target: ['.dQxoj > article:nth-child(3)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Publish &amp; Showcase</h3>',
          target: ['.dQxoj > article:nth-child(3) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Share your cases, research, and portfolio to build reputation.</p>',
          target: ['.dQxoj > article:nth-child(3) > .sc-55ce9742-30.iZKdTJ'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<article class="sc-55ce9742-26 cWpEsW"><h3 class="sc-55ce9742-29 oumRg">Manage Projects</h3><p class="sc-55ce9742-30 iZKdTJ">Organize tasks, collaborate, and track progress in one system.</p></article>',
          target: ['.dQxoj > article:nth-child(4)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Manage Projects</h3>',
          target: ['.dQxoj > article:nth-child(4) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Organize tasks, collaborate, and track progress in one system.</p>',
          target: ['.dQxoj > article:nth-child(4) > .sc-55ce9742-30.iZKdTJ'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<article class="sc-55ce9742-26 cWpEsW"><h3 class="sc-55ce9742-29 oumRg">Real Opportunities</h3><p class="sc-55ce9742-30 iZKdTJ">Discover projects, partnerships, and collaborations inside Link private network.</p></article>',
          target: ['article:nth-child(5)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Real Opportunities</h3>',
          target: ['article:nth-child(5) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Discover projects, partnerships, and collaborations inside Link private network.</p>',
          target: ['article:nth-child(5) > .sc-55ce9742-30.iZKdTJ'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<article class="sc-55ce9742-26 cWpEsW"><h3 class="sc-55ce9742-29 oumRg">Global Collaboration</h3><p class="sc-55ce9742-30 iZKdTJ">Work with professionals from different countries and backgrounds.</p></article>',
          target: ['article:nth-child(6)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Global Collaboration</h3>',
          target: ['article:nth-child(6) > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Work with professionals from different countries and backgrounds.</p>',
          target: ['article:nth-child(6) > .sc-55ce9742-30.iZKdTJ'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-0 jOoHfR">',
          target: ['#lab > .sc-55ce9742-0.jOoHfR'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-15 uiPEk">',
          target: ['.sc-38ad1aac-15'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div>',
          target: ['.sc-38ad1aac-15 > div:nth-child(1)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div style="color:#FF7E55" class="sc-55ce9742-19 hUPeLP">AI Lab</div>',
          target: [
            '.sc-38ad1aac-15 > div:nth-child(1) > .sc-55ce9742-19.hUPeLP',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">A Public AI Lab + Private Execution Network</h2>',
          target: ['.sc-38ad1aac-15 > div:nth-child(1) > h2'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p>We continuously research and publish insights on modern AI and technology. But we don’t stop at theory — we turn research into real-world execution.</p>',
          target: ['.sc-38ad1aac-15 > div:nth-child(1) > p'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<ul class="sc-38ad1aac-16 hVGHUN"><li>experiments → prototypes</li><li>prototypes → products</li><li>ideas → working systems</li></ul>',
          target: ['.sc-38ad1aac-16'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>experiments → prototypes</li>',
          target: ['.sc-38ad1aac-16 > li:nth-child(1)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>prototypes → products</li>',
          target: ['.sc-38ad1aac-16 > li:nth-child(2)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>ideas → working systems</li>',
          target: ['.sc-38ad1aac-16 > li:nth-child(3)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-17 gaCJtv"><img src="/_next/static/media/lab.f0426066.jpg" alt="AI research lab" loading="lazy"></div>',
          target: ['.sc-38ad1aac-17'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<img src="/_next/static/media/lab.f0426066.jpg" alt="AI research lab" loading="lazy">',
          target: ['img[alt="AI research lab"]'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-0 jOoHfR">',
          target: [
            '.drRFkU.sc-55ce9742-16:nth-child(9) > .sc-55ce9742-0.jOoHfR',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-22 iTepZm">',
          target: [
            '.drRFkU.sc-55ce9742-16:nth-child(9) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-22.iTepZm',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-24 hsTLCD"><img src="/_next/static/media/trust.a5e85844.jpg" alt="Accountability and trust" loading="lazy"></div>',
          target: [
            '.drRFkU.sc-55ce9742-16:nth-child(9) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-22.iTepZm > .sc-55ce9742-24.hsTLCD',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<img src="/_next/static/media/trust.a5e85844.jpg" alt="Accountability and trust" loading="lazy">',
          target: ['img[alt="Accountability and trust"]'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-23 iDlWmg">',
          target: [
            '.drRFkU.sc-55ce9742-16:nth-child(9) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-22.iTepZm > .sc-55ce9742-23.iDlWmg',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-19 hUPeLP">Quality &amp; Trust</div>',
          target: [
            '.drRFkU.sc-55ce9742-16:nth-child(9) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-22.iTepZm > .sc-55ce9742-23.iDlWmg > .sc-55ce9742-19.hUPeLP',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">Accountability Built-In</h2>',
          target: [
            '.drRFkU.sc-55ce9742-16:nth-child(9) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-22.iTepZm > .sc-55ce9742-23.iDlWmg > h2',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p>Unlike traditional platforms:</p>',
          target: [
            '.drRFkU.sc-55ce9742-16:nth-child(9) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-22.iTepZm > .sc-55ce9742-23.iDlWmg > p:nth-child(3)',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<ul style="list-style:none;padding:0;margin:10px 0 18px">',
          target: ['.sc-55ce9742-23.iDlWmg > ul'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li style="padding:8px 0;color:#3B3D44"><span style="color:#FF5B2E;margin-right:10px">✓</span>we verify participants</li>',
          target: ['.sc-55ce9742-23.iDlWmg > ul > li:nth-child(1)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<span style="color:#FF5B2E;margin-right:10px">✓</span>',
          target: ['li:nth-child(1) > span'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li style="padding:8px 0;color:#3B3D44"><span style="color:#FF5B2E;margin-right:10px">✓</span>we curate access</li>',
          target: ['.sc-55ce9742-23.iDlWmg > ul > li:nth-child(2)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<span style="color:#FF5B2E;margin-right:10px">✓</span>',
          target: ['li:nth-child(2) > span'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li style="padding:8px 0;color:#3B3D44"><span style="color:#FF5B2E;margin-right:10px">✓</span>we stay involved in execution</li>',
          target: ['.sc-55ce9742-23.iDlWmg > ul > li:nth-child(3)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<span style="color:#FF5B2E;margin-right:10px">✓</span>',
          target: ['li:nth-child(3) > span'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p><strong>We don’t just connect people — we stand behind the work.</strong></p>',
          target: ['p:nth-child(5)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<strong>We don’t just connect people — we stand behind the work.</strong>',
          target: ['p:nth-child(5) > strong'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-0 jOoHfR">',
          target: [
            '.dFgjoQ.sc-55ce9742-16:nth-child(10) > .sc-55ce9742-0.jOoHfR',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-17 gOBZST"><div class="sc-55ce9742-19 hUPeLP">Who It’s For</div><h2 class="sc-55ce9742-20 lloRzV">Built for Three Kinds of Builders</h2></div>',
          target: [
            '.dFgjoQ.sc-55ce9742-16:nth-child(10) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-19 hUPeLP">Who It’s For</div>',
          target: [
            '.dFgjoQ.sc-55ce9742-16:nth-child(10) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > .sc-55ce9742-19.hUPeLP',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">Built for Three Kinds of Builders</h2>',
          target: [
            '.dFgjoQ.sc-55ce9742-16:nth-child(10) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-18 keMOOM">',
          target: ['.sc-38ad1aac-18'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-19 gEThoD"><div class="sc-38ad1aac-20 ioWPsT"></div><div class="sc-38ad1aac-21 hkNzqE"><h3>Clients</h3><p>Who need clarity in AI chaos and reliable execution.</p></div></div>',
          target: ['.sc-38ad1aac-19.gEThoD:nth-child(1)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-20 ioWPsT"></div>',
          target: ['.ioWPsT'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-21 hkNzqE"><h3>Clients</h3><p>Who need clarity in AI chaos and reliable execution.</p></div>',
          target: [
            '.sc-38ad1aac-19.gEThoD:nth-child(1) > .sc-38ad1aac-21.hkNzqE',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3>Clients</h3>',
          target: [
            '.sc-38ad1aac-19.gEThoD:nth-child(1) > .sc-38ad1aac-21.hkNzqE > h3',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p>Who need clarity in AI chaos and reliable execution.</p>',
          target: [
            '.sc-38ad1aac-19.gEThoD:nth-child(1) > .sc-38ad1aac-21.hkNzqE > p',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-19 gEThoD"><div class="sc-38ad1aac-20 eXrXAI"></div><div class="sc-38ad1aac-21 hkNzqE"><h3>Professionals</h3><p>Who want access to real projects and strong teams.</p></div></div>',
          target: ['.sc-38ad1aac-19.gEThoD:nth-child(2)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-20 eXrXAI"></div>',
          target: ['.eXrXAI'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-21 hkNzqE"><h3>Professionals</h3><p>Who want access to real projects and strong teams.</p></div>',
          target: [
            '.sc-38ad1aac-19.gEThoD:nth-child(2) > .sc-38ad1aac-21.hkNzqE',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3>Professionals</h3>',
          target: [
            '.sc-38ad1aac-19.gEThoD:nth-child(2) > .sc-38ad1aac-21.hkNzqE > h3',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p>Who want access to real projects and strong teams.</p>',
          target: [
            '.sc-38ad1aac-19.gEThoD:nth-child(2) > .sc-38ad1aac-21.hkNzqE > p',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-19 gEThoD"><div class="sc-38ad1aac-20 coffBj"></div><div class="sc-38ad1aac-21 hkNzqE"><h3>Studios &amp; Teams</h3><p>Who want to collaborate, scale, and access new deal flow.</p></div></div>',
          target: ['.sc-38ad1aac-19.gEThoD:nth-child(3)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-20 coffBj"></div>',
          target: ['.coffBj'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-21 hkNzqE"><h3>Studios &amp; Teams</h3><p>Who want to collaborate, scale, and access new deal flow.</p></div>',
          target: [
            '.sc-38ad1aac-19.gEThoD:nth-child(3) > .sc-38ad1aac-21.hkNzqE',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3>Studios &amp; Teams</h3>',
          target: [
            '.sc-38ad1aac-19.gEThoD:nth-child(3) > .sc-38ad1aac-21.hkNzqE > h3',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p>Who want to collaborate, scale, and access new deal flow.</p>',
          target: [
            '.sc-38ad1aac-19.gEThoD:nth-child(3) > .sc-38ad1aac-21.hkNzqE > p',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-0 jOoHfR">',
          target: ['#explore > .sc-55ce9742-0.jOoHfR'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-17 gOBZST"><div class="sc-55ce9742-19 hUPeLP">What lives inside</div><h2 class="sc-55ce9742-20 lloRzV">Five things you can actually do here</h2><p class="sc-55ce9742-21 dWWHwn">Everyone reads. Members create. Each section answers one question: why should I bother?</p></div>',
          target: ['#explore > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-19 hUPeLP">What lives inside</div>',
          target: [
            '#explore > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > .sc-55ce9742-19.hUPeLP',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">Five things you can actually do here</h2>',
          target: [
            '#explore > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-21 dWWHwn">Everyone reads. Members create. Each section answers one question: why should I bother?</p>',
          target: [
            '#explore > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > .sc-55ce9742-21.dWWHwn',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-6 ijnQaH">',
          target: ['.sc-38ad1aac-6'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="sc-38ad1aac-7 fWDGhB" href="/people">',
          target: ['.sc-38ad1aac-7.fWDGhB[href$="people"]'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-8 iKEXiS"></div>',
          target: ['.iKEXiS'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-9 cbaZJz">',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="people"] > .sc-38ad1aac-9.cbaZJz',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-10 fRtVlF">Members</div>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="people"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-10.fRtVlF',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Reach real people</h3>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="people"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Browsing is open. Direct contact requires an invite — that\'s the whole point of Link closed club.</p>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="people"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-30.iZKdTJ',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<span class="sc-38ad1aac-11 oqXGO">See members</span>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="people"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-11.oqXGO',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="sc-38ad1aac-7 fWDGhB" href="/teams">',
          target: ['.sc-38ad1aac-7.fWDGhB[href$="teams"]'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-8 fElZoz"></div>',
          target: ['.fElZoz'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-9 cbaZJz">',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="teams"] > .sc-38ad1aac-9.cbaZJz',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-10 fRtVlF">Teams</div>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="teams"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-10.fRtVlF',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Build Link unit, not Link CV</h3>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="teams"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Stack portfolios and services. Clients hire teams. Investors back teams. Delegate inside.</p>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="teams"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-30.iZKdTJ',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<span class="sc-38ad1aac-11 oqXGO">See teams</span>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="teams"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-11.oqXGO',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="sc-38ad1aac-7 fWDGhB" href="/offers">',
          target: ['.sc-38ad1aac-7.fWDGhB[href$="offers"]'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-8 hpwekz"></div>',
          target: ['.hpwekz'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-9 cbaZJz">',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="offers"] > .sc-38ad1aac-9.cbaZJz',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-10 fRtVlF">Offers</div>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="offers"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-10.fRtVlF',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Anything you propose</h3>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="offers"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Service, collaboration, research, hiring — one free-form format. A real human behind every post.</p>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="offers"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-30.iZKdTJ',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<span class="sc-38ad1aac-11 oqXGO">See offers</span>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="offers"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-11.oqXGO',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="sc-38ad1aac-7 fWDGhB" href="/projects">',
          target: ['.sc-38ad1aac-7.fWDGhB[href$="projects"]'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-8 bUFUWU"></div>',
          target: ['.bUFUWU'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-9 cbaZJz">',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="projects"] > .sc-38ad1aac-9.cbaZJz',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-10 fRtVlF">Projects</div>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="projects"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-10.fRtVlF',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Find partners. Attract investors.</h3>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="projects"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Public badges signal intent:<!-- --> <strong>Looking for partners</strong>,<!-- --> <strong>Seeking investor</strong>,<!-- --> <strong>Help wanted</strong>.</p>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="projects"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-30.iZKdTJ',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<strong>Looking for partners</strong>',
          target: ['.sc-55ce9742-30.iZKdTJ > strong:nth-child(1)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<strong>Seeking investor</strong>',
          target: ['strong:nth-child(2)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<strong>Help wanted</strong>',
          target: ['strong:nth-child(3)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<span class="sc-38ad1aac-11 oqXGO">See projects</span>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="projects"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-11.oqXGO',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="sc-38ad1aac-7 fWDGhB" href="/tasks">',
          target: ['.sc-38ad1aac-7.fWDGhB[href$="tasks"]'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-8 cDZoBw"></div>',
          target: ['.cDZoBw'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-9 cbaZJz">',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="tasks"] > .sc-38ad1aac-9.cbaZJz',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-10 fRtVlF">Tasks</div>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="tasks"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-10.fRtVlF',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">Ship small, in public</h3>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="tasks"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">Scoped work attached to real projects. Closed tasks become public worklogs and case studies.</p>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="tasks"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-30.iZKdTJ',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<span class="sc-38ad1aac-11 oqXGO">See tasks</span>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="tasks"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-11.oqXGO',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="sc-38ad1aac-7 fWDGhB" href="/about">',
          target: ['.sc-38ad1aac-7.fWDGhB[href$="about"]'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-8 kLeqaa"></div>',
          target: ['.kLeqaa'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-9 cbaZJz">',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="about"] > .sc-38ad1aac-9.cbaZJz',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-10 fRtVlF">Why it works</div>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="about"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-10.fRtVlF',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 class="sc-55ce9742-29 oumRg">An invite-only network</h3>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="about"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-29.oumRg',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-30 iZKdTJ">14 years of curation. No spam, no noise, no fake profiles. Read the philosophy.</p>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="about"] > .sc-38ad1aac-9.cbaZJz > .sc-55ce9742-30.iZKdTJ',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<span class="sc-38ad1aac-11 oqXGO">About Freecode Academy</span>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="about"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-11.oqXGO',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-0 jOoHfR">',
          target: ['#community > .sc-55ce9742-0.jOoHfR'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-17 gOBZST"><div class="sc-55ce9742-19 hUPeLP">Community</div><h2 class="sc-55ce9742-20 lloRzV">A Private Network, Not an Open Marketplace</h2><p class="sc-55ce9742-21 dWWHwn">Access is limited and curated.</p></div>',
          target: [
            '#community > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-19 hUPeLP">Community</div>',
          target: [
            '#community > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > .sc-55ce9742-19.hUPeLP',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h2 class="sc-55ce9742-20 lloRzV">A Private Network, Not an Open Marketplace</h2>',
          target: [
            '#community > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > h2',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p class="sc-55ce9742-21 dWWHwn">Access is limited and curated.</p>',
          target: [
            '#community > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > .sc-55ce9742-21.dWWHwn',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-22 kVFEpS">',
          target: ['.sc-38ad1aac-22'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-23 krFGpX"></div>',
          target: ['.sc-38ad1aac-23'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-38ad1aac-24 ekjfZe"><h3 style="font-size:26px" class="sc-55ce9742-29 oumRg">This ensures:</h3><ul><li>higher signal, lower noise</li><li>trusted interactions</li><li>real opportunities instead of spam</li></ul></div>',
          target: ['.sc-38ad1aac-24'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<h3 style="font-size:26px" class="sc-55ce9742-29 oumRg">This ensures:</h3>',
          target: ['.sc-38ad1aac-24 > .sc-55ce9742-29.oumRg'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<ul><li>higher signal, lower noise</li><li>trusted interactions</li><li>real opportunities instead of spam</li></ul>',
          target: ['.sc-38ad1aac-24 > ul'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>higher signal, lower noise</li>',
          target: ['.sc-38ad1aac-24 > ul > li:nth-child(1)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>trusted interactions</li>',
          target: ['.sc-38ad1aac-24 > ul > li:nth-child(2)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<li>real opportunities instead of spam</li>',
          target: ['.sc-38ad1aac-24 > ul > li:nth-child(3)'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<section id="cta" class="sc-38ad1aac-25 eOYlOT">',
          target: ['#cta'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-0 jOoHfR">',
          target: ['#cta > .sc-55ce9742-0.jOoHfR'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div style="margin-top:28px" class="sc-55ce9742-13 fXwvkL"><div class="sc-977eafde-0 gwtsdv"><button class="sc-55ce9742-14 kqsRLa">Get Access →</button></div><a class="sc-55ce9742-15 kWbzHd" href="https://t.me/freecode_academy">Join Telegram Channel</a></div>',
          target: ['#cta > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-13.fXwvkL'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-977eafde-0 gwtsdv"><button class="sc-55ce9742-14 kqsRLa">Get Access →</button></div>',
          target: [
            '#cta > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-13.fXwvkL > .sc-977eafde-0.gwtsdv',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<button class="sc-55ce9742-14 kqsRLa">Get Access →</button>',
          target: [
            '#cta > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-13.fXwvkL > .sc-977eafde-0.gwtsdv > .sc-55ce9742-14.kqsRLa',
          ],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<footer class="sc-4037caf9-0 ObEWE"><div class="sc-55ce9742-0 sc-4037caf9-1 jOoHfR cDEkRb"><a class="sc-55ce9742-2 liZVAL" href="/">Freecode Academy</a><div>© <!-- -->2026<!-- --> Freecode Academy Network. All rights shared.</div></div></footer>',
          target: ['footer'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-55ce9742-0 sc-4037caf9-1 jOoHfR cDEkRb"><a class="sc-55ce9742-2 liZVAL" href="/">Freecode Academy</a><div>© <!-- -->2026<!-- --> Freecode Academy Network. All rights shared.</div></div>',
          target: ['.sc-4037caf9-1'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<a class="sc-55ce9742-2 liZVAL" href="/">Freecode Academy</a>',
          target: ['.sc-4037caf9-1 > .sc-55ce9742-2.liZVAL[href="/"]'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div>© <!-- -->2026<!-- --> Freecode Academy Network. All rights shared.</div>',
          target: ['.sc-4037caf9-1 > div'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<div class="sc-a79fa3e6-0 ewcMXw"><button type="button" class="sc-a79fa3e6-18 hQbpmF"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></button></div>',
          target: ['.sc-a79fa3e6-0'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<button type="button" class="sc-a79fa3e6-18 hQbpmF"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></button>',
          target: ['.sc-a79fa3e6-18'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
          target: ['svg'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
          target: ['path'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<next-route-announcer>',
          target: ['next-route-announcer'],
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'All page content is contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: null,
          html: '<p aria-live="assertive" id="__next-route-announcer__" role="alert" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 1px; white-space: nowrap; overflow-wrap: normal;"></p>',
          target: ['#__next-route-announcer__'],
        },
      ],
    },
  ],
  violations: [
    {
      id: 'button-name',
      impact: 'critical',
      tags: [
        'cat.name-role-value',
        'wcag2a',
        'wcag412',
        'section508',
        'section508.22.a',
        'TTv5',
        'TT6.a',
        'EN-301-549',
        'EN-9.4.1.2',
        'ACT',
        'RGAAv4',
        'RGAA-11.9.1',
      ],
      description: 'Ensure buttons have discernible text',
      help: 'Buttons must have discernible text',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'button-has-visible-text',
              data: null,
              relatedNodes: [],
              impact: 'critical',
              message:
                'Element does not have inner text that is visible to screen readers',
            },
            {
              id: 'aria-label',
              data: null,
              relatedNodes: [],
              impact: 'critical',
              message: 'aria-label attribute does not exist or is empty',
            },
            {
              id: 'aria-labelledby',
              data: null,
              relatedNodes: [],
              impact: 'critical',
              message:
                'aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty',
            },
            {
              id: 'non-empty-title',
              data: {
                messageKey: 'noAttr',
              },
              relatedNodes: [],
              impact: 'critical',
              message: 'Element has no title attribute',
            },
            {
              id: 'implicit-label',
              data: null,
              relatedNodes: [],
              impact: 'critical',
              message: 'Element does not have an implicit (wrapped) <label>',
            },
            {
              id: 'explicit-label',
              data: null,
              relatedNodes: [],
              impact: 'critical',
              message: 'Element does not have an explicit <label>',
            },
            {
              id: 'presentational-role',
              data: null,
              relatedNodes: [],
              impact: 'critical',
              message:
                'Element\'s default semantics were not overridden with role="none" or role="presentation"',
            },
          ],
          all: [],
          none: [],
          impact: 'critical',
          html: '<button type="button" class="sc-a79fa3e6-18 hQbpmF"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></button>',
          target: ['.sc-a79fa3e6-18'],
          failureSummary:
            'Fix any of the following:\n  Element does not have inner text that is visible to screen readers\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute\n  Element does not have an implicit (wrapped) <label>\n  Element does not have an explicit <label>\n  Element\'s default semantics were not overridden with role="none" or role="presentation"',
        },
      ],
    },
    {
      id: 'color-contrast',
      impact: ImpactValue.SERIOUS,
      tags: [
        'cat.color',
        'wcag2aa',
        'wcag143',
        'TTv5',
        'TT13.c',
        'EN-301-549',
        'EN-9.1.4.3',
        'ACT',
        'RGAAv4',
        'RGAA-3.2.1',
      ],
      description:
        'Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds',
      help: 'Elements must meet minimum color contrast ratio thresholds',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#ff5b2e',
                bgColor: '#fbfaf6',
                contrastRatio: 2.96,
                fontSize: '9.8pt (13px)',
                fontWeight: 'normal',
                messageKey: null,
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [
                {
                  html: '<section id="core" class="sc-55ce9742-16 dFgjoQ">',
                  target: ['#core'],
                },
              ],
              impact: ImpactValue.SERIOUS,
              message:
                'Element has insufficient color contrast of 2.96 (foreground color: #ff5b2e, background color: #fbfaf6, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<div class="sc-55ce9742-19 hUPeLP">Core Idea</div>',
          target: [
            '#core > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-22.iTepZm > .sc-55ce9742-23.iDlWmg > .sc-55ce9742-19.hUPeLP',
          ],
          failureSummary:
            'Fix any of the following:\n  Element has insufficient color contrast of 2.96 (foreground color: #ff5b2e, background color: #fbfaf6, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1',
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#ff5b2e',
                bgColor: '#f4efe3',
                contrastRatio: 2.69,
                fontSize: '9.8pt (13px)',
                fontWeight: 'normal',
                messageKey: null,
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [
                {
                  html: '<section class="sc-55ce9742-16 drRFkU">',
                  target: ['.drRFkU.sc-55ce9742-16:nth-child(5)'],
                },
              ],
              impact: ImpactValue.SERIOUS,
              message:
                'Element has insufficient color contrast of 2.69 (foreground color: #ff5b2e, background color: #f4efe3, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<div class="sc-55ce9742-19 hUPeLP">What Makes Us Different</div>',
          target: [
            '.drRFkU.sc-55ce9742-16:nth-child(5) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > .sc-55ce9742-19.hUPeLP',
          ],
          failureSummary:
            'Fix any of the following:\n  Element has insufficient color contrast of 2.69 (foreground color: #ff5b2e, background color: #f4efe3, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1',
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#ff5b2e',
                bgColor: '#ffe4d6',
                contrastRatio: 2.55,
                fontSize: '13.5pt (18px)',
                fontWeight: 'bold',
                messageKey: null,
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [
                {
                  html: '<div class="sc-55ce9742-28 cvFudy">AI</div>',
                  target: ['article:nth-child(1) > .sc-55ce9742-28.cvFudy'],
                },
              ],
              impact: ImpactValue.SERIOUS,
              message:
                'Element has insufficient color contrast of 2.55 (foreground color: #ff5b2e, background color: #ffe4d6, font size: 13.5pt (18px), font weight: bold). Expected contrast ratio of 4.5:1',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<div class="sc-55ce9742-28 cvFudy">AI</div>',
          target: ['article:nth-child(1) > .sc-55ce9742-28.cvFudy'],
          failureSummary:
            'Fix any of the following:\n  Element has insufficient color contrast of 2.55 (foreground color: #ff5b2e, background color: #ffe4d6, font size: 13.5pt (18px), font weight: bold). Expected contrast ratio of 4.5:1',
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#ff5b2e',
                bgColor: '#fbfaf6',
                contrastRatio: 2.96,
                fontSize: '9.8pt (13px)',
                fontWeight: 'normal',
                messageKey: null,
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [
                {
                  html: '<section id="how" class="sc-55ce9742-16 dFgjoQ">',
                  target: ['#how'],
                },
              ],
              impact: ImpactValue.SERIOUS,
              message:
                'Element has insufficient color contrast of 2.96 (foreground color: #ff5b2e, background color: #fbfaf6, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<div class="sc-55ce9742-19 hUPeLP">How It Works</div>',
          target: [
            '#how > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > .sc-55ce9742-19.hUPeLP',
          ],
          failureSummary:
            'Fix any of the following:\n  Element has insufficient color contrast of 2.96 (foreground color: #ff5b2e, background color: #fbfaf6, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1',
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#ff5b2e',
                bgColor: '#ffffff',
                contrastRatio: 3.09,
                fontSize: '9.8pt (13px)',
                fontWeight: 'normal',
                messageKey: null,
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [
                {
                  html: '<section id="offer" class="sc-55ce9742-16 kzTECr">',
                  target: ['#offer'],
                },
              ],
              impact: ImpactValue.SERIOUS,
              message:
                'Element has insufficient color contrast of 3.09 (foreground color: #ff5b2e, background color: #ffffff, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<div class="sc-55ce9742-19 hUPeLP">What We Offer</div>',
          target: [
            '#offer > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > .sc-55ce9742-19.hUPeLP',
          ],
          failureSummary:
            'Fix any of the following:\n  Element has insufficient color contrast of 3.09 (foreground color: #ff5b2e, background color: #ffffff, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1',
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#ff5b2e',
                bgColor: '#f4efe3',
                contrastRatio: 2.69,
                fontSize: '9.8pt (13px)',
                fontWeight: 'normal',
                messageKey: null,
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [
                {
                  html: '<section class="sc-55ce9742-16 drRFkU">',
                  target: ['.drRFkU.sc-55ce9742-16:nth-child(9)'],
                },
              ],
              impact: ImpactValue.SERIOUS,
              message:
                'Element has insufficient color contrast of 2.69 (foreground color: #ff5b2e, background color: #f4efe3, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<div class="sc-55ce9742-19 hUPeLP">Quality &amp; Trust</div>',
          target: [
            '.drRFkU.sc-55ce9742-16:nth-child(9) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-22.iTepZm > .sc-55ce9742-23.iDlWmg > .sc-55ce9742-19.hUPeLP',
          ],
          failureSummary:
            'Fix any of the following:\n  Element has insufficient color contrast of 2.69 (foreground color: #ff5b2e, background color: #f4efe3, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1',
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#ff5b2e',
                bgColor: '#fbfaf6',
                contrastRatio: 2.96,
                fontSize: '9.8pt (13px)',
                fontWeight: 'normal',
                messageKey: null,
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [
                {
                  html: '<section class="sc-55ce9742-16 dFgjoQ">',
                  target: ['.dFgjoQ.sc-55ce9742-16:nth-child(10)'],
                },
              ],
              impact: ImpactValue.SERIOUS,
              message:
                'Element has insufficient color contrast of 2.96 (foreground color: #ff5b2e, background color: #fbfaf6, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<div class="sc-55ce9742-19 hUPeLP">Who It’s For</div>',
          target: [
            '.dFgjoQ.sc-55ce9742-16:nth-child(10) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > .sc-55ce9742-19.hUPeLP',
          ],
          failureSummary:
            'Fix any of the following:\n  Element has insufficient color contrast of 2.96 (foreground color: #ff5b2e, background color: #fbfaf6, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1',
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#ff5b2e',
                bgColor: '#fbfaf6',
                contrastRatio: 2.96,
                fontSize: '9.8pt (13px)',
                fontWeight: 'normal',
                messageKey: null,
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [
                {
                  html: '<section id="explore" class="sc-55ce9742-16 dFgjoQ">',
                  target: ['#explore'],
                },
              ],
              impact: ImpactValue.SERIOUS,
              message:
                'Element has insufficient color contrast of 2.96 (foreground color: #ff5b2e, background color: #fbfaf6, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<div class="sc-55ce9742-19 hUPeLP">What lives inside</div>',
          target: [
            '#explore > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > .sc-55ce9742-19.hUPeLP',
          ],
          failureSummary:
            'Fix any of the following:\n  Element has insufficient color contrast of 2.96 (foreground color: #ff5b2e, background color: #fbfaf6, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1',
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#ff5b2e',
                bgColor: '#ffffff',
                contrastRatio: 3.09,
                fontSize: '9.0pt (12px)',
                fontWeight: 'normal',
                messageKey: null,
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [
                {
                  html: '<a class="sc-38ad1aac-7 fWDGhB" href="/people">',
                  target: ['.sc-38ad1aac-7.fWDGhB[href$="people"]'],
                },
              ],
              impact: ImpactValue.SERIOUS,
              message:
                'Element has insufficient color contrast of 3.09 (foreground color: #ff5b2e, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<div class="sc-38ad1aac-10 fRtVlF">Members</div>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="people"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-10.fRtVlF',
          ],
          failureSummary:
            'Fix any of the following:\n  Element has insufficient color contrast of 3.09 (foreground color: #ff5b2e, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1',
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#ff5b2e',
                bgColor: '#ffffff',
                contrastRatio: 3.09,
                fontSize: '9.0pt (12px)',
                fontWeight: 'normal',
                messageKey: null,
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [
                {
                  html: '<a class="sc-38ad1aac-7 fWDGhB" href="/teams">',
                  target: ['.sc-38ad1aac-7.fWDGhB[href$="teams"]'],
                },
              ],
              impact: ImpactValue.SERIOUS,
              message:
                'Element has insufficient color contrast of 3.09 (foreground color: #ff5b2e, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<div class="sc-38ad1aac-10 fRtVlF">Teams</div>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="teams"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-10.fRtVlF',
          ],
          failureSummary:
            'Fix any of the following:\n  Element has insufficient color contrast of 3.09 (foreground color: #ff5b2e, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1',
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#ff5b2e',
                bgColor: '#ffffff',
                contrastRatio: 3.09,
                fontSize: '9.0pt (12px)',
                fontWeight: 'normal',
                messageKey: null,
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [
                {
                  html: '<a class="sc-38ad1aac-7 fWDGhB" href="/offers">',
                  target: ['.sc-38ad1aac-7.fWDGhB[href$="offers"]'],
                },
              ],
              impact: ImpactValue.SERIOUS,
              message:
                'Element has insufficient color contrast of 3.09 (foreground color: #ff5b2e, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<div class="sc-38ad1aac-10 fRtVlF">Offers</div>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="offers"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-10.fRtVlF',
          ],
          failureSummary:
            'Fix any of the following:\n  Element has insufficient color contrast of 3.09 (foreground color: #ff5b2e, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1',
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#ff5b2e',
                bgColor: '#ffffff',
                contrastRatio: 3.09,
                fontSize: '9.0pt (12px)',
                fontWeight: 'normal',
                messageKey: null,
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [
                {
                  html: '<a class="sc-38ad1aac-7 fWDGhB" href="/projects">',
                  target: ['.sc-38ad1aac-7.fWDGhB[href$="projects"]'],
                },
              ],
              impact: ImpactValue.SERIOUS,
              message:
                'Element has insufficient color contrast of 3.09 (foreground color: #ff5b2e, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<div class="sc-38ad1aac-10 fRtVlF">Projects</div>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="projects"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-10.fRtVlF',
          ],
          failureSummary:
            'Fix any of the following:\n  Element has insufficient color contrast of 3.09 (foreground color: #ff5b2e, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1',
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#ff5b2e',
                bgColor: '#ffffff',
                contrastRatio: 3.09,
                fontSize: '9.0pt (12px)',
                fontWeight: 'normal',
                messageKey: null,
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [
                {
                  html: '<a class="sc-38ad1aac-7 fWDGhB" href="/tasks">',
                  target: ['.sc-38ad1aac-7.fWDGhB[href$="tasks"]'],
                },
              ],
              impact: ImpactValue.SERIOUS,
              message:
                'Element has insufficient color contrast of 3.09 (foreground color: #ff5b2e, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<div class="sc-38ad1aac-10 fRtVlF">Tasks</div>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="tasks"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-10.fRtVlF',
          ],
          failureSummary:
            'Fix any of the following:\n  Element has insufficient color contrast of 3.09 (foreground color: #ff5b2e, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1',
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#ff5b2e',
                bgColor: '#ffffff',
                contrastRatio: 3.09,
                fontSize: '9.0pt (12px)',
                fontWeight: 'normal',
                messageKey: null,
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [
                {
                  html: '<a class="sc-38ad1aac-7 fWDGhB" href="/about">',
                  target: ['.sc-38ad1aac-7.fWDGhB[href$="about"]'],
                },
              ],
              impact: ImpactValue.SERIOUS,
              message:
                'Element has insufficient color contrast of 3.09 (foreground color: #ff5b2e, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<div class="sc-38ad1aac-10 fRtVlF">Why it works</div>',
          target: [
            '.sc-38ad1aac-7.fWDGhB[href$="about"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-10.fRtVlF',
          ],
          failureSummary:
            'Fix any of the following:\n  Element has insufficient color contrast of 3.09 (foreground color: #ff5b2e, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1',
        },
        {
          any: [
            {
              id: 'color-contrast',
              data: {
                fgColor: '#ff5b2e',
                bgColor: '#ffffff',
                contrastRatio: 3.09,
                fontSize: '9.8pt (13px)',
                fontWeight: 'normal',
                messageKey: null,
                expectedContrastRatio: '4.5:1',
              },
              relatedNodes: [
                {
                  html: '<section id="community" class="sc-55ce9742-16 kzTECr">',
                  target: ['#community'],
                },
              ],
              impact: ImpactValue.SERIOUS,
              message:
                'Element has insufficient color contrast of 3.09 (foreground color: #ff5b2e, background color: #ffffff, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<div class="sc-55ce9742-19 hUPeLP">Community</div>',
          target: [
            '#community > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > .sc-55ce9742-19.hUPeLP',
          ],
          failureSummary:
            'Fix any of the following:\n  Element has insufficient color contrast of 3.09 (foreground color: #ff5b2e, background color: #ffffff, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1',
        },
      ],
    },
    {
      id: 'html-has-lang',
      impact: ImpactValue.SERIOUS,
      tags: [
        'cat.language',
        'wcag2a',
        'wcag311',
        'TTv5',
        'TT11.a',
        'EN-301-549',
        'EN-9.3.1.1',
        'ACT',
        'RGAAv4',
        'RGAA-8.3.1',
      ],
      description: 'Ensure every HTML document has a lang attribute',
      help: '<html> element must have a lang attribute',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'has-lang',
              data: {
                messageKey: 'noLang',
              },
              relatedNodes: [],
              impact: ImpactValue.SERIOUS,
              message: 'The <html> element does not have a lang attribute',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.SERIOUS,
          html: '<html>',
          target: ['html'],
          failureSummary:
            'Fix any of the following:\n  The <html> element does not have a lang attribute',
        },
      ],
    },
    {
      id: 'landmark-one-main',
      impact: ImpactValue.MODERATE,
      tags: ['cat.semantics', 'best-practice'],
      description: 'Ensure the document has a main landmark',
      help: 'Document should have one main landmark',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright',
      nodes: [
        {
          any: [],
          all: [
            {
              id: 'page-has-main',
              data: null,
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Document does not have a main landmark',
            },
          ],
          none: [],
          impact: ImpactValue.MODERATE,
          html: '<html>',
          target: ['html'],
          failureSummary:
            'Fix all of the following:\n  Document does not have a main landmark',
        },
      ],
    },
    {
      id: 'meta-viewport',
      impact: ImpactValue.MODERATE,
      tags: [
        'cat.sensory-and-visual-cues',
        'wcag2aa',
        'wcag144',
        'EN-301-549',
        'EN-9.1.4.4',
        'ACT',
        'RGAAv4',
        'RGAA-10.4.2',
      ],
      description:
        'Ensure <meta name="viewport"> does not disable text scaling and zooming',
      help: 'Zooming and scaling must not be disabled',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'meta-viewport',
              data: 'user-scalable=no',
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message:
                'user-scalable=no on <meta> tag disables zooming on mobile devices',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.MODERATE,
          html: '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no" data-next-head="">',
          target: ['meta[name="viewport"]'],
          failureSummary:
            'Fix any of the following:\n  user-scalable=no on <meta> tag disables zooming on mobile devices',
        },
      ],
    },
    {
      id: 'region',
      impact: ImpactValue.MODERATE,
      tags: ['cat.keyboard', 'best-practice', 'RGAAv4', 'RGAA-9.2.1'],
      description: 'Ensure all page content is contained by landmarks',
      help: 'All page content should be contained by landmarks',
      helpUrl:
        'https://dequeuniversity.com/rules/axe/4.11/region?application=playwright',
      nodes: [
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Some page content is not contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.MODERATE,
          html: '<div>',
          target: ['.sc-55ce9742-7 > div:nth-child(1)'],
          failureSummary:
            'Fix any of the following:\n  Some page content is not contained by landmarks',
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Some page content is not contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.MODERATE,
          html: '<p class="sc-55ce9742-12 kggOaz">Not Link freelance marketplace. A coordinated team with shared responsibility for real outcomes.</p>',
          target: ['.sc-55ce9742-12'],
          failureSummary:
            'Fix any of the following:\n  Some page content is not contained by landmarks',
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Some page content is not contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.MODERATE,
          html: '<a class="sc-55ce9742-15 kWbzHd" href="https://t.me/freecode_academy">Join Telegram Channel</a>',
          target: [
            '.sc-55ce9742-7 > .sc-55ce9742-13.fXwvkL > .sc-55ce9742-15.kWbzHd[href$="freecode_academy"]',
          ],
          failureSummary:
            'Fix any of the following:\n  Some page content is not contained by landmarks',
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Some page content is not contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.MODERATE,
          html: '<section class="sc-38ad1aac-0 hDqWnV">',
          target: ['.sc-38ad1aac-0'],
          failureSummary:
            'Fix any of the following:\n  Some page content is not contained by landmarks',
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Some page content is not contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.MODERATE,
          html: '<section id="core" class="sc-55ce9742-16 dFgjoQ">',
          target: ['#core'],
          failureSummary:
            'Fix any of the following:\n  Some page content is not contained by landmarks',
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Some page content is not contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.MODERATE,
          html: '<section class="sc-55ce9742-16 drRFkU">',
          target: ['.drRFkU.sc-55ce9742-16:nth-child(5)'],
          failureSummary:
            'Fix any of the following:\n  Some page content is not contained by landmarks',
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Some page content is not contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.MODERATE,
          html: '<section id="how" class="sc-55ce9742-16 dFgjoQ">',
          target: ['#how'],
          failureSummary:
            'Fix any of the following:\n  Some page content is not contained by landmarks',
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Some page content is not contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.MODERATE,
          html: '<section id="offer" class="sc-55ce9742-16 kzTECr">',
          target: ['#offer'],
          failureSummary:
            'Fix any of the following:\n  Some page content is not contained by landmarks',
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Some page content is not contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.MODERATE,
          html: '<section id="lab" class="sc-55ce9742-16 dFgjoQ">',
          target: ['#lab'],
          failureSummary:
            'Fix any of the following:\n  Some page content is not contained by landmarks',
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Some page content is not contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.MODERATE,
          html: '<section class="sc-55ce9742-16 drRFkU">',
          target: ['.drRFkU.sc-55ce9742-16:nth-child(9)'],
          failureSummary:
            'Fix any of the following:\n  Some page content is not contained by landmarks',
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Some page content is not contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.MODERATE,
          html: '<section class="sc-55ce9742-16 dFgjoQ">',
          target: ['.dFgjoQ.sc-55ce9742-16:nth-child(10)'],
          failureSummary:
            'Fix any of the following:\n  Some page content is not contained by landmarks',
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Some page content is not contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.MODERATE,
          html: '<section id="explore" class="sc-55ce9742-16 dFgjoQ">',
          target: ['#explore'],
          failureSummary:
            'Fix any of the following:\n  Some page content is not contained by landmarks',
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Some page content is not contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.MODERATE,
          html: '<section id="community" class="sc-55ce9742-16 kzTECr">',
          target: ['#community'],
          failureSummary:
            'Fix any of the following:\n  Some page content is not contained by landmarks',
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Some page content is not contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.MODERATE,
          html: '<div class="sc-55ce9742-19 hUPeLP">Ready to Join?</div>',
          target: ['.sc-55ce9742-0.jOoHfR > .sc-55ce9742-19.hUPeLP'],
          failureSummary:
            'Fix any of the following:\n  Some page content is not contained by landmarks',
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Some page content is not contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.MODERATE,
          html: '<h1 style="font-size:clamp(36px, 5vw, 64px);max-width:16ch" class="sc-55ce9742-10 frjUjB">A new kind of professional network.</h1>',
          target: ['.sc-55ce9742-0.jOoHfR > h1'],
          failureSummary:
            'Fix any of the following:\n  Some page content is not contained by landmarks',
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Some page content is not contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.MODERATE,
          html: '<p class="sc-55ce9742-11 iuYqNI">Work on real projects. Collaborate with trusted professionals. Be part of Link system that actually delivers.</p>',
          target: ['.sc-55ce9742-0.jOoHfR > .sc-55ce9742-11.iuYqNI'],
          failureSummary:
            'Fix any of the following:\n  Some page content is not contained by landmarks',
        },
        {
          any: [
            {
              id: 'region',
              data: {
                isIframe: false,
              },
              relatedNodes: [],
              impact: ImpactValue.MODERATE,
              message: 'Some page content is not contained by landmarks',
            },
          ],
          all: [],
          none: [],
          impact: ImpactValue.MODERATE,
          html: '<a class="sc-55ce9742-15 kWbzHd" href="https://t.me/freecode_academy">Join Telegram Channel</a>',
          target: [
            '#cta > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-13.fXwvkL > .sc-55ce9742-15.kWbzHd[href$="freecode_academy"]',
          ],
          failureSummary:
            'Fix any of the following:\n  Some page content is not contained by landmarks',
        },
      ],
    },
  ],
  screenshot: 'web-analyze/issues/0.9626504643980605.png',
  issues: [
    {
      selector: '.sc-a79fa3e6-18',
      ruleId: 'button-name',
      failureSummary:
        'Fix any of the following:\n  Element does not have inner text that is visible to screen readers\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute\n  Element does not have an implicit (wrapped) <label>\n  Element does not have an explicit <label>\n  Element\'s default semantics were not overridden with role="none" or role="presentation"',
      help: 'Buttons must have discernible text',
      html: '<button type="button" class="sc-a79fa3e6-18 hQbpmF"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></button>',
      impact: ImpactValue.CRITICAL,
      BBox: {
        x: 1840,
        y: 1000,
        width: 56,
        height: 56,
      },
    },
    {
      selector:
        '#core > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-22.iTepZm > .sc-55ce9742-23.iDlWmg > .sc-55ce9742-19.hUPeLP',
      ruleId: 'color-contrast',
      failureSummary:
        'Fix any of the following:\n  Element has insufficient color contrast of 2.96 (foreground color: #ff5b2e, background color: #fbfaf6, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1',
      help: 'Elements must meet minimum color contrast ratio thresholds',
      html: '<div class="sc-55ce9742-19 hUPeLP">Core Idea</div>',
      impact: ImpactValue.SERIOUS,
      BBox: {
        x: 384,
        y: 1066.328125,
        width: 565.453125,
        height: 20.140625,
      },
    },
    {
      selector:
        '.drRFkU.sc-55ce9742-16:nth-child(5) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > .sc-55ce9742-19.hUPeLP',
      ruleId: 'color-contrast',
      failureSummary:
        'Fix any of the following:\n  Element has insufficient color contrast of 2.69 (foreground color: #ff5b2e, background color: #f4efe3, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1',
      help: 'Elements must meet minimum color contrast ratio thresholds',
      html: '<div class="sc-55ce9742-19 hUPeLP">What Makes Us Different</div>',
      impact: ImpactValue.SERIOUS,
      BBox: {
        x: 600,
        y: 1525.90625,
        width: 720,
        height: 20.140625,
      },
    },
    {
      selector: 'article:nth-child(1) > .sc-55ce9742-28.cvFudy',
      ruleId: 'color-contrast',
      failureSummary:
        'Fix any of the following:\n  Element has insufficient color contrast of 2.55 (foreground color: #ff5b2e, background color: #ffe4d6, font size: 13.5pt (18px), font weight: bold). Expected contrast ratio of 4.5:1',
      help: 'Elements must meet minimum color contrast ratio thresholds',
      html: '<div class="sc-55ce9742-28 cvFudy">AI</div>',
      impact: ImpactValue.SERIOUS,
      BBox: {
        x: 415,
        y: 1703.734375,
        width: 44,
        height: 44,
      },
    },
    {
      selector:
        '#how > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > .sc-55ce9742-19.hUPeLP',
      ruleId: 'color-contrast',
      failureSummary:
        'Fix any of the following:\n  Element has insufficient color contrast of 2.96 (foreground color: #ff5b2e, background color: #fbfaf6, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1',
      help: 'Elements must meet minimum color contrast ratio thresholds',
      html: '<div class="sc-55ce9742-19 hUPeLP">How It Works</div>',
      impact: ImpactValue.SERIOUS,
      BBox: {
        x: 600,
        y: 2213.921875,
        width: 720,
        height: 20.140625,
      },
    },
    {
      selector:
        '#offer > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > .sc-55ce9742-19.hUPeLP',
      ruleId: 'color-contrast',
      failureSummary:
        'Fix any of the following:\n  Element has insufficient color contrast of 3.09 (foreground color: #ff5b2e, background color: #ffffff, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1',
      help: 'Elements must meet minimum color contrast ratio thresholds',
      html: '<div class="sc-55ce9742-19 hUPeLP">What We Offer</div>',
      impact: ImpactValue.SERIOUS,
      BBox: {
        x: 600,
        y: 2696.59375,
        width: 720,
        height: 20.140625,
      },
    },
    {
      selector:
        '.drRFkU.sc-55ce9742-16:nth-child(9) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-22.iTepZm > .sc-55ce9742-23.iDlWmg > .sc-55ce9742-19.hUPeLP',
      ruleId: 'color-contrast',
      failureSummary:
        'Fix any of the following:\n  Element has insufficient color contrast of 2.69 (foreground color: #ff5b2e, background color: #f4efe3, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1',
      help: 'Elements must meet minimum color contrast ratio thresholds',
      html: '<div class="sc-55ce9742-19 hUPeLP">Quality &amp; Trust</div>',
      impact: ImpactValue.SERIOUS,
      BBox: {
        x: 997.453125,
        y: 4017.3125,
        width: 538.546875,
        height: 20.140625,
      },
    },
    {
      selector:
        '.dFgjoQ.sc-55ce9742-16:nth-child(10) > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > .sc-55ce9742-19.hUPeLP',
      ruleId: 'color-contrast',
      failureSummary:
        'Fix any of the following:\n  Element has insufficient color contrast of 2.96 (foreground color: #ff5b2e, background color: #fbfaf6, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1',
      help: 'Elements must meet minimum color contrast ratio thresholds',
      html: '<div class="sc-55ce9742-19 hUPeLP">Who It’s For</div>',
      impact: ImpactValue.SERIOUS,
      BBox: {
        x: 600,
        y: 4489.3125,
        width: 720,
        height: 20.140625,
      },
    },
    {
      selector:
        '#explore > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > .sc-55ce9742-19.hUPeLP',
      ruleId: 'color-contrast',
      failureSummary:
        'Fix any of the following:\n  Element has insufficient color contrast of 2.96 (foreground color: #ff5b2e, background color: #fbfaf6, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1',
      help: 'Elements must meet minimum color contrast ratio thresholds',
      html: '<div class="sc-55ce9742-19 hUPeLP">What lives inside</div>',
      impact: ImpactValue.SERIOUS,
      BBox: {
        x: 600,
        y: 5068.734375,
        width: 720,
        height: 20.140625,
      },
    },
    {
      selector:
        '.sc-38ad1aac-7.fWDGhB[href$="people"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-10.fRtVlF',
      ruleId: 'color-contrast',
      failureSummary:
        'Fix any of the following:\n  Element has insufficient color contrast of 3.09 (foreground color: #ff5b2e, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1',
      help: 'Elements must meet minimum color contrast ratio thresholds',
      html: '<div class="sc-38ad1aac-10 fRtVlF">Members</div>',
      impact: ImpactValue.SERIOUS,
      BBox: {
        x: 409,
        y: 5573.296875,
        width: 320.65625,
        height: 18.59375,
      },
    },
    {
      selector:
        '.sc-38ad1aac-7.fWDGhB[href$="teams"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-10.fRtVlF',
      ruleId: 'color-contrast',
      failureSummary:
        'Fix any of the following:\n  Element has insufficient color contrast of 3.09 (foreground color: #ff5b2e, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1',
      help: 'Elements must meet minimum color contrast ratio thresholds',
      html: '<div class="sc-38ad1aac-10 fRtVlF">Teams</div>',
      impact: ImpactValue.SERIOUS,
      BBox: {
        x: 799.65625,
        y: 5573.3125,
        width: 320.671875,
        height: 18.59375,
      },
    },
    {
      selector:
        '.sc-38ad1aac-7.fWDGhB[href$="offers"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-10.fRtVlF',
      ruleId: 'color-contrast',
      failureSummary:
        'Fix any of the following:\n  Element has insufficient color contrast of 3.09 (foreground color: #ff5b2e, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1',
      help: 'Elements must meet minimum color contrast ratio thresholds',
      html: '<div class="sc-38ad1aac-10 fRtVlF">Offers</div>',
      impact: ImpactValue.SERIOUS,
      BBox: {
        x: 1190.328125,
        y: 5573.296875,
        width: 320.65625,
        height: 18.59375,
      },
    },
    {
      selector:
        '.sc-38ad1aac-7.fWDGhB[href$="projects"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-10.fRtVlF',
      ruleId: 'color-contrast',
      failureSummary:
        'Fix any of the following:\n  Element has insufficient color contrast of 3.09 (foreground color: #ff5b2e, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1',
      help: 'Elements must meet minimum color contrast ratio thresholds',
      html: '<div class="sc-38ad1aac-10 fRtVlF">Projects</div>',
      impact: ImpactValue.SERIOUS,
      BBox: {
        x: 409,
        y: 6029.90625,
        width: 320.65625,
        height: 18.59375,
      },
    },
    {
      selector:
        '.sc-38ad1aac-7.fWDGhB[href$="tasks"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-10.fRtVlF',
      ruleId: 'color-contrast',
      failureSummary:
        'Fix any of the following:\n  Element has insufficient color contrast of 3.09 (foreground color: #ff5b2e, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1',
      help: 'Elements must meet minimum color contrast ratio thresholds',
      html: '<div class="sc-38ad1aac-10 fRtVlF">Tasks</div>',
      impact: ImpactValue.SERIOUS,
      BBox: {
        x: 799.65625,
        y: 6029.921875,
        width: 320.671875,
        height: 18.59375,
      },
    },
    {
      selector:
        '.sc-38ad1aac-7.fWDGhB[href$="about"] > .sc-38ad1aac-9.cbaZJz > .sc-38ad1aac-10.fRtVlF',
      ruleId: 'color-contrast',
      failureSummary:
        'Fix any of the following:\n  Element has insufficient color contrast of 3.09 (foreground color: #ff5b2e, background color: #ffffff, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1',
      help: 'Elements must meet minimum color contrast ratio thresholds',
      html: '<div class="sc-38ad1aac-10 fRtVlF">Why it works</div>',
      impact: ImpactValue.SERIOUS,
      BBox: {
        x: 1190.328125,
        y: 6029.90625,
        width: 320.65625,
        height: 18.59375,
      },
    },
    {
      selector:
        '#community > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-17.gOBZST > .sc-55ce9742-19.hUPeLP',
      ruleId: 'color-contrast',
      failureSummary:
        'Fix any of the following:\n  Element has insufficient color contrast of 3.09 (foreground color: #ff5b2e, background color: #ffffff, font size: 9.8pt (13px), font weight: normal). Expected contrast ratio of 4.5:1',
      help: 'Elements must meet minimum color contrast ratio thresholds',
      html: '<div class="sc-55ce9742-19 hUPeLP">Community</div>',
      impact: ImpactValue.SERIOUS,
      BBox: {
        x: 600,
        y: 6330.15625,
        width: 720,
        height: 20.140625,
      },
    },
    {
      selector: 'html',
      ruleId: 'html-has-lang',
      failureSummary:
        'Fix any of the following:\n  The <html> element does not have a lang attribute',
      help: '<html> element must have a lang attribute',
      html: '<html>',
      impact: ImpactValue.SERIOUS,
      BBox: {
        x: 0,
        y: 0,
        width: 1920,
        height: 1080,
      },
    },
    {
      selector: 'html',
      ruleId: 'landmark-one-main',
      failureSummary:
        'Fix all of the following:\n  Document does not have a main landmark',
      help: 'Document should have one main landmark',
      html: '<html>',
      impact: ImpactValue.MODERATE,
      BBox: {
        x: 0,
        y: 0,
        width: 1920,
        height: 1080,
      },
    },
    {
      selector: '.sc-55ce9742-7 > div:nth-child(1)',
      ruleId: 'region',
      failureSummary:
        'Fix any of the following:\n  Some page content is not contained by landmarks',
      help: 'All page content should be contained by landmarks',
      html: '<div>',
      impact: ImpactValue.MODERATE,
      BBox: {
        x: 384,
        y: 85.09375,
        width: 1152,
        height: 402.03125,
      },
    },
    {
      selector: '.sc-55ce9742-12',
      ruleId: 'region',
      failureSummary:
        'Fix any of the following:\n  Some page content is not contained by landmarks',
      help: 'All page content should be contained by landmarks',
      html: '<p class="sc-55ce9742-12 kggOaz">Not Link freelance marketplace. A coordinated team with shared responsibility for real outcomes.</p>',
      impact: ImpactValue.MODERATE,
      BBox: {
        x: 700,
        y: 511.125,
        width: 520,
        height: 46.5,
      },
    },
    {
      selector:
        '.sc-55ce9742-7 > .sc-55ce9742-13.fXwvkL > .sc-55ce9742-15.kWbzHd[href$="freecode_academy"]',
      ruleId: 'region',
      failureSummary:
        'Fix any of the following:\n  Some page content is not contained by landmarks',
      help: 'All page content should be contained by landmarks',
      html: '<a class="sc-55ce9742-15 kWbzHd" href="https://t.me/freecode_academy">Join Telegram Channel</a>',
      impact: ImpactValue.MODERATE,
      BBox: {
        x: 931.015625,
        y: 617.625,
        width: 221,
        height: 53.25,
      },
    },
    {
      selector: '.sc-38ad1aac-0',
      ruleId: 'region',
      failureSummary:
        'Fix any of the following:\n  Some page content is not contained by landmarks',
      help: 'All page content should be contained by landmarks',
      html: '<section class="sc-38ad1aac-0 hDqWnV">',
      impact: ImpactValue.MODERATE,
      BBox: {
        x: 0,
        y: 700.875,
        width: 1920,
        height: 277.125,
      },
    },
    {
      selector: '#core',
      ruleId: 'region',
      failureSummary:
        'Fix any of the following:\n  Some page content is not contained by landmarks',
      help: 'All page content should be contained by landmarks',
      html: '<section id="core" class="sc-55ce9742-16 dFgjoQ">',
      impact: ImpactValue.MODERATE,
      BBox: {
        x: 0,
        y: 978,
        width: 1920,
        height: 499.90625,
      },
    },
    {
      selector: '.drRFkU.sc-55ce9742-16:nth-child(5)',
      ruleId: 'region',
      failureSummary:
        'Fix any of the following:\n  Some page content is not contained by landmarks',
      help: 'All page content should be contained by landmarks',
      html: '<section class="sc-55ce9742-16 drRFkU">',
      impact: ImpactValue.MODERATE,
      BBox: {
        x: 0,
        y: 1477.90625,
        width: 1920,
        height: 688.015625,
      },
    },
    {
      selector: '#how',
      ruleId: 'region',
      failureSummary:
        'Fix any of the following:\n  Some page content is not contained by landmarks',
      help: 'All page content should be contained by landmarks',
      html: '<section id="how" class="sc-55ce9742-16 dFgjoQ">',
      impact: ImpactValue.MODERATE,
      BBox: {
        x: 0,
        y: 2165.921875,
        width: 1920,
        height: 482.671875,
      },
    },
    {
      selector: '#offer',
      ruleId: 'region',
      failureSummary:
        'Fix any of the following:\n  Some page content is not contained by landmarks',
      help: 'All page content should be contained by landmarks',
      html: '<section id="offer" class="sc-55ce9742-16 kzTECr">',
      impact: ImpactValue.MODERATE,
      BBox: {
        x: 0,
        y: 2648.59375,
        width: 1920,
        height: 564.015625,
      },
    },
    {
      selector: '#lab',
      ruleId: 'region',
      failureSummary:
        'Fix any of the following:\n  Some page content is not contained by landmarks',
      help: 'All page content should be contained by landmarks',
      html: '<section id="lab" class="sc-55ce9742-16 dFgjoQ">',
      impact: ImpactValue.MODERATE,
      BBox: {
        x: 0,
        y: 3212.609375,
        width: 1920,
        height: 708.625,
      },
    },
    {
      selector: '.drRFkU.sc-55ce9742-16:nth-child(9)',
      ruleId: 'region',
      failureSummary:
        'Fix any of the following:\n  Some page content is not contained by landmarks',
      help: 'All page content should be contained by landmarks',
      html: '<section class="sc-55ce9742-16 drRFkU">',
      impact: ImpactValue.MODERATE,
      BBox: {
        x: 0,
        y: 3921.234375,
        width: 1920,
        height: 520.078125,
      },
    },
    {
      selector: '.dFgjoQ.sc-55ce9742-16:nth-child(10)',
      ruleId: 'region',
      failureSummary:
        'Fix any of the following:\n  Some page content is not contained by landmarks',
      help: 'All page content should be contained by landmarks',
      html: '<section class="sc-55ce9742-16 dFgjoQ">',
      impact: ImpactValue.MODERATE,
      BBox: {
        x: 0,
        y: 4441.3125,
        width: 1920,
        height: 579.421875,
      },
    },
    {
      selector: '#explore',
      ruleId: 'region',
      failureSummary:
        'Fix any of the following:\n  Some page content is not contained by landmarks',
      help: 'All page content should be contained by landmarks',
      html: '<section id="explore" class="sc-55ce9742-16 dFgjoQ">',
      impact: ImpactValue.MODERATE,
      BBox: {
        x: 0,
        y: 5020.734375,
        width: 1920,
        height: 1261.421875,
      },
    },
    {
      selector: '#community',
      ruleId: 'region',
      failureSummary:
        'Fix any of the following:\n  Some page content is not contained by landmarks',
      help: 'All page content should be contained by landmarks',
      html: '<section id="community" class="sc-55ce9742-16 kzTECr">',
      impact: ImpactValue.MODERATE,
      BBox: {
        x: 0,
        y: 6282.15625,
        width: 1920,
        height: 703.859375,
      },
    },
    {
      selector: '.sc-55ce9742-0.jOoHfR > .sc-55ce9742-19.hUPeLP',
      ruleId: 'region',
      failureSummary:
        'Fix any of the following:\n  Some page content is not contained by landmarks',
      help: 'All page content should be contained by landmarks',
      html: '<div class="sc-55ce9742-19 hUPeLP">Ready to Join?</div>',
      impact: ImpactValue.MODERATE,
      BBox: {
        x: 384,
        y: 7106.015625,
        width: 1152,
        height: 20.140625,
      },
    },
    {
      selector: '.sc-55ce9742-0.jOoHfR > h1',
      ruleId: 'region',
      failureSummary:
        'Fix any of the following:\n  Some page content is not contained by landmarks',
      help: 'All page content should be contained by landmarks',
      html: '<h1 style="font-size:clamp(36px, 5vw, 64px);max-width:16ch" class="sc-55ce9742-10 frjUjB">A new kind of professional network.</h1>',
      impact: ImpactValue.MODERATE,
      BBox: {
        x: 704,
        y: 7148.15625,
        width: 512,
        height: 130.53125,
      },
    },
    {
      selector: '.sc-55ce9742-0.jOoHfR > .sc-55ce9742-11.iuYqNI',
      ruleId: 'region',
      failureSummary:
        'Fix any of the following:\n  Some page content is not contained by landmarks',
      help: 'All page content should be contained by landmarks',
      html: '<p class="sc-55ce9742-11 iuYqNI">Work on real projects. Collaborate with trusted professionals. Be part of Link system that actually delivers.</p>',
      impact: ImpactValue.MODERATE,
      BBox: {
        x: 640,
        y: 7296.6875,
        width: 640,
        height: 58.875,
      },
    },
    {
      selector:
        '#cta > .sc-55ce9742-0.jOoHfR > .sc-55ce9742-13.fXwvkL > .sc-55ce9742-15.kWbzHd[href$="freecode_academy"]',
      ruleId: 'region',
      failureSummary:
        'Fix any of the following:\n  Some page content is not contained by landmarks',
      help: 'All page content should be contained by landmarks',
      html: '<a class="sc-55ce9742-15 kWbzHd" href="https://t.me/freecode_academy">Join Telegram Channel</a>',
      impact: ImpactValue.MODERATE,
      BBox: {
        x: 931.015625,
        y: 7383.5625,
        width: 221,
        height: 53.25,
      },
    },
  ],
}
