package com.example.Active.Learning.project.account.repositories;

import com.example.Active.Learning.project.account.models.PLanguage;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface  PLanguageRepository extends JpaRepository<PLanguage, UUID> {

    @Query("select u from Course u where u.name like %:#{[0]}% or u.name like %:searchValue%")
    Page<PLanguage> findAllByLike(String searchValue, Pageable pageable);

    boolean existsByName(String name);
}
