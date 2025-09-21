"use client";

import { useState, ReactNode } from 'react';
import Modal from './Modal';
import knowledgeBase from '../../data/knowledge_base.json';

interface GlossaryTermProps {
  termKey: keyof typeof knowledgeBase;
  children: ReactNode;
}

export default function GlossaryTerm({ termKey, children }: GlossaryTermProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const termData = knowledgeBase[termKey];

  return (
    <>
      <span
        className="text-blue-500 dark:text-blue-400 cursor-pointer border-b-2 border-dotted border-blue-500"
        onClick={() => setModalOpen(true)}
      >
        {children}
      </span>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        {termData ? (
          <div>
            <h3 className="text-xl font-bold font-arabic">{termData.term}</h3>
            <p className="mt-2">{termData.definition}</p>
            {termData.example && <p className="mt-2 text-sm text-gray-500 italic">Example: {termData.example}</p>}
          </div>
        ) : (
          <p>Term not found in knowledge base.</p>
        )}
      </Modal>
    </>
  );
}
