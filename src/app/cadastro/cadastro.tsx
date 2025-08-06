'use client';

import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { InputWithLabel, SelectWithLabel, TextareaWithLabel } from "@/components/input-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { useState } from "react";
import styles from "./cadastro.module.css";

export default function Cadastro() {
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    tipo: '',
    urgencia: '',
    prazo: '',
    temPrazo: true
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTogglePrazo = () => {
    setFormData(prev => ({
      ...prev,
      temPrazo: !prev.temPrazo,
      prazo: !prev.temPrazo ? prev.prazo : ''
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    // Aqui você pode adicionar a lógica para enviar os dados
  };

  const tipoOptions = [
    { value: "desenvolvimento", label: "Desenvolvimento" },
    { value: "dados", label: "Dados" },
    { value: "listas", label: "Listas" },
    { value: "reuniao", label: "Reunião" },
    { value: "planejamento", label: "Planejamento" }
  ];

  const urgenciaOptions = [
    { value: "baixa", label: "Baixa" },
    { value: "media", label: "Média" },
    { value: "alta", label: "Alta" }
  ];



  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.header}>
              <h1 className={styles.title}>Cadastrar Nova Demanda</h1>
            </div>
            <div className={styles.formContainer}>
              <Card className={styles.card}>
                <CardHeader>
                  <CardTitle>Informações da Demanda</CardTitle>
                  <CardDescription>
                    Preencha os campos abaixo para cadastrar uma nova demanda
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGrid}>
                      <InputWithLabel
                        id="titulo"
                        label="Título"
                        placeholder="Digite o título da demanda"
                        required={true}
                        value={formData.titulo}
                        onChange={(e) => handleInputChange('titulo', e.target.value)}
                        className={styles.fullWidth}
                      />
                      
                      <div className={styles.rowThree}>
                        <SelectWithLabel
                          id="tipo"
                          label="Tipo"
                          placeholder="Selecione o tipo"
                          required={true}
                          value={formData.tipo}
                          onValueChange={(value) => handleInputChange('tipo', value)}
                          options={tipoOptions}
                          className={styles.thirdWidth}
                        />
                        
                        <SelectWithLabel
                          id="urgencia"
                          label="Urgência"
                          placeholder="Selecione a urgência"
                          required={true}
                          value={formData.urgencia}
                          onValueChange={(value) => handleInputChange('urgencia', value)}
                          options={urgenciaOptions}
                          className={styles.thirdWidth}
                        />
                        
                        <div className={styles.prazoContainer}>
                          <div className={styles.prazoHeader}>
                            <label className={styles.prazoLabel}>Prazo</label>
                            <div className={styles.prazoToggle}>
                              <Checkbox
                                id="temPrazo"
                                checked={formData.temPrazo}
                                onCheckedChange={handleTogglePrazo}
                              />
                              <label htmlFor="temPrazo" className={styles.toggleLabel}>
                                Definir prazo
                              </label>
                            </div>
                          </div>
                          {formData.temPrazo && (
                            <InputWithLabel
                              id="prazo"
                              label=""
                              type="date"
                              placeholder=""
                              required={false}
                              value={formData.prazo}
                              onChange={(e) => handleInputChange('prazo', e.target.value)}
                              className={styles.prazoInput}
                            />
                          )}
                        </div>
                      </div>
                      
                      <TextareaWithLabel
                        id="descricao"
                        label="Descrição"
                        placeholder="Digite a descrição da demanda"
                        required={true}
                        value={formData.descricao}
                        onChange={(e) => handleInputChange('descricao', e.target.value)}
                        rows={4}
                        className={styles.fullWidth}
                      />
                    </div>
                    
                    <div className={styles.buttonContainer}>
                      <Button type="submit" className={styles.submitButton}>
                        Cadastrar Demanda
                      </Button>
                      <Button type="button" variant="outline" className={styles.cancelButton}>
                        Cancelar
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
