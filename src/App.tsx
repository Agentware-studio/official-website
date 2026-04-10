/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import AgentwareDefinitionPage from './app/page';
import KnowledgeBaseEvolutionPage from './knowledge-base-evolution/page';

export default function App() {
  if (typeof window !== 'undefined' && window.location.pathname.startsWith('/knowledge-base-evolution')) {
    return <KnowledgeBaseEvolutionPage />;
  }

  return <AgentwareDefinitionPage />;
}
