import React from 'react';
import Card from './common/Card';
import { EDUCATION_DATA, RocketLaunchIcon } from '../constants';
import Button from './common/Button';

const EducationPage: React.FC = () => {
  return (
    <div className="pt-4">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-heading font-bold text-dark-gray mb-4">
            Ta'lim va <span className="text-primary-green">Rivojlanish</span> Markazi
          </h2>
          <p className="text-xl text-medium-gray mb-16">
            Biznesingizni keyingi bosquichga olib chiqish uchun bilim va ko'nikmalaringizni oshiring. Bizning kurslarimiz va resurslarimiz sizga yordam beradi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EDUCATION_DATA.map((course, index) => (
            <Card key={course.id} className="p-8 flex flex-col text-center items-center h-full animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
              <div className="bg-ultra-light-green text-primary-green rounded-xl p-5 mb-5 shadow-sm">
                <course.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-dark-gray mb-3">{course.title}</h3>
              <p className="text-medium-gray text-base flex-grow mb-6">{course.description}</p>
              <Button variant="primary" size="md" className="mt-auto">
                Kursni boshlash
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationPage;