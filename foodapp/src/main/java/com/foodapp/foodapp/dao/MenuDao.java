package com.foodapp.foodapp.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.foodapp.foodapp.dto.Menu;
import com.foodapp.foodapp.repository.MenuRepository;



@Repository
public class MenuDao {
	
	@Autowired
	private MenuRepository menuRepository;
	public Menu saveMenu(Menu menu) {
		return menuRepository.save(menu);
	}
	public Optional<Menu> getby(int id) {
		return menuRepository.findById(id);
	}
	public Menu delete(int id) {
		Menu menu=getby(id).get();
		menuRepository.delete(menu);
		return menu;
	}
	public Menu update(Menu menu, int id) {
		menu.setId(id);
		return menuRepository.save(menu);
	}
	public List<Menu> getall(){
		return menuRepository.findAll();
	}
}
