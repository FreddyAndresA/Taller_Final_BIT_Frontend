import { TestBed } from '@angular/core/testing';

import { ListarPeliculasService } from './listar-peliculas.service';

describe('ListarPeliculasService', () => {
  let service: ListarPeliculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarPeliculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
